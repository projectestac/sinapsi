<?php

namespace Seidor\Foundation;

use Auth;
use DB;
use Exception;
use Validator;
use Carbon\Carbon;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\Paginator;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


/**
 * This abstract class extends the Eloquent Model class.
 *
 * The Model is extended with a number of convenience methods to simplify
 * the implementation of JSON REST services with Laravel and improve its
 * integration with AngularJS.
 *
 * Along with the provided scope and validation services, this class
 * overwrites the default model serialization methods for dates in order
 * to use the ISO-8601 standard by default; which is better handled by
 * AngularJS and JavaScript applications in general.
 */
abstract class FoundationModel extends Model {

    /** Default pagination limit */
    const LIMIT = 25;

    /** Maximum pagination limit */
    const MAX_LIMIT = 200;


    /**
     * Attributes validation rules
     *
     * @var array
     */
    protected static $fields = [];

    /**
     * Required attributes validation rules
     *
     * @var array
     */
    protected static $required = [];

    /**
     * Constrained attributes validation rules
     *
     * @var array
     */
    protected static $constrains = [];

    /**
     * Text attributes used for searching.
     *
     * @var array
     */
    protected $searchable = [];

    /**
     * Relations than can be fetched automatically
     *
     * @var array
     */
    protected $includable = [];

    /**
     * Attributes that should not be updated
     *
     * @var array
     */
    protected $protected = [];


    /**
     * Overwrites the default model serialization method for dates.
     *
     * This method serializes dates to the standard ISO-8601 format.
     *
     * {@inheritDoc}
     *
     * @param DateTime  $date       Date to serialize
     * @return string               An ISO-8601 date string
     */
    protected function serializeDate(DateTimeInterface $date) {
        return $date->format('Y-m-d\TH:i:s.uP');
    }


    /**
     * Overwrites the default model deserialization method for dates.
     *
     * This method tries to parse the provided value as an ISO date first
     * and if that fails uses the default Laravel deserializations.
     *
     * {@inheritDoc}
     *
     * @param mixed  $value         Date value or object
     * @return \Carbon\Carbon       Deserialized date object
     */
    protected function asDateTime($value) {
        // Parse the value as an ISO 8601 date if possible

        try {
            if (is_string($value)) {
                return Carbon::createFromFormat(
                    'Y-m-d\TH:i:s.uP', $value);
            }
        } catch (Exception $e) {}

        // Parse the value with the built-in methods, which default
        // to the current database date format

        return parent::asDateTime($value);
    }


    /**
     * Validates the given array using the provided rules.
     *
     * Tries to validate the input array against the provided rules array
     * and throws a validation exception if it fails. The thrown error
     * response is formated as a JSON response object.
     *
     * @param array $input          Array of values to validate
     * @param array $rules          Validation rules array
     *
     * @throws ValidationException  If the array validation fails
     */
    protected static function validateArray(array $input, array $rules) {
        $validator = Validator::make($input, $rules);

        if ($validator->fails()) {
            $errors = $validator->errors()->getMessages();
            $response = new JsonResponse($errors, 422);

            throw new ValidationException($validator, $response);
        }
    }


    /**
     * Validates a request using the rules defined on the $contrains
     * array of the model, if defined.
     *
     * @param Request $request      HTTP request object
     * @return array                Validated values array
     * @throws ValidationException  If the request validation fails
     */
    public static function validateConstrains(Request $request) {
        $input = $request->all();
        $result = [];

        if (!empty(static::$constrains)) {
            static::validateArray($input, static::$constrains);

            foreach (static::$constrains as $key => $rules) {
                if ($request->exists($key)) {
                    $value = $request->get($key);
                    $result[$key] = $value;
                }
            }
        }

        return $result;
    }


    /**
     * Validates a request using the rules defined on the $required
     * array of the model, if defined.
     *
     * @param Request $request      HTTP request object
     * @return array                Validated values array
     * @throws ValidationException  If the request validation fails
     */
    public static function validateRequired(Request $request) {
        $input = $request->all();
        $result = [];

        if (!empty(static::$required)) {
            static::validateArray($input, static::$required);

            foreach (static::$required as $key => $rules) {
                if ($request->exists($key)) {
                    $value = $request->get($key);
                    $result[$key] = $value;
                }
            }
        }

        return $result;
    }


    /**
     * Validates a request using the rules defined on the $fields array
     * of the model, if defined.
     *
     * Returns an array with the valid values provided on the request. If the
     * request is not valid an exception is thrown.
     *
     * @param Request $request      HTTP request object
     * @param boolean $required     Whether required fields must be validated
     *
     * @return array                Validated values array
     * @throws ValidationException  If the request validation fails
     */
    public static function validateFields(Request $request) {
        $input = $request->all();
        $result = [];

        if (!empty(static::$fields)) {
            static::validateArray($input, static::$fields);

            foreach (static::$fields as $key => $rules) {
                if ($request->exists($key)) {
                    $value = $request->get($key);
                    $result[$key] = $value;
                }
            }
        }

        return $result;
    }


    /**
     * Orders the query by the matched text position.
     *
     * If the search string is found on the column value the result
     * is ordered ascending by the position value.
     *
     * @param $query    Query
     * @param $column   Table column
     * @param $search   Text to match
     */
    public function scopeOrderByMatch($query, $column, $string) {
        if (is_string($string) && strlen($string) > 0) {
            $sql = "nullif(-position(? in `$column`), 0) desc";
            $query->orderByRaw($sql, [$string]);
        }

        return $query;
    }


    /**
     * Add a WHERE-LIKE clause to the query to match the provided
     * string in any position.
     *
     * This is a convenience method that escapes the given search string
     * and prefixes and suffixes it with % before adding the WHERE clause
     * to the query. Thus, the value "Example_%string" is translated to the
     * SQL clause "WHERE $key LIKE '%Example\_\%string%'".
     *
     * @param string $field         Database column description
     * @param string $text          Text to match
     *
     * @return Builder              Scoped query
     */
    public function scopeWhereContains($query, $field, $text, $boolean = 'and') {
        $value = str_replace('%', '\%', $text);
        $value = str_replace('_', '\_', $value);

        return $query->where($field, 'like', "%$value%", $boolean);
    }



    /**
     * Add an OR WHERE-LIKE clause to the query to match the provided
     * string in any position.
     *
     * @param string $field         Database column name
     * @param string $text          Text to search for
     *
     * @return Builder              Scoped query
     */
    public function scopeOrWhereContains($query, $field, $text) {
        return $query->whereContains($field, $text, 'or');
    }


    /**
     * Prevents the query from returning any results.
     *
     * This is a convenience method that adds a WHERE 1 = 0 clause to the
     * query so it doesn't return any values.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCorrupt($query) {
        return $query->whereRaw('1 = 0');
    }


    /**
     * Adds a select clause that trims the selected text value to the
     * specified length with an ellipsis.
     *
     * For example, given the text "Lorem ipsum dolor sit amet" and a maximum
     * length of 10, the fetched field value will become "Lorem ips…".
     *
     * @param string $field         Database column name
     * @param int $length           Maximum length of the returned string
     *
     * @return Builder              Scoped query
     */
    public function scopeSelectEllipsis($query, $field, $length) {
        $chars = intval($length);

        return $query->selectRaw(
            "concat(left(`$field`, ?)," .
            "if(length(`$field`) > ?, '…', '')) as `$field`",
            [$chars, $chars]
        );
    }


    /**
     * Adds a WHERE clause to perform a MySQL full text search.
     *
     * This method currently only implements the MATCH-AGAINST method for a
     * MySQL database if it is available (MySQL version >= 5.6.0); otherwise
     * a WHERE-LIKE clause is added to the query.
     *
     * @param string $field         Database column name
     * @param string $text          Text to search for
     *
     * @return Builder              Scoped query
     */
    public function scopeWhereText($query, $fields, $text, $boolean = 'and') {
        $searchValue = $this->sanitizeSearch(trim($text));

        if ($searchValue == false) {
            return $query;
        }

        $columns = implode(',', array_map(function($name) {
            return "`$name`";
        }, $fields));

        $query->whereRaw("match($columns) against(? in boolean mode)",
            [$searchValue], $boolean);

        return $query;
    }


    /**
     * Sanitize a string for use in full-text searches in boolean
     * mode. Only the symbols [+-~@*"] are supported.
     *
     * @param $text     Text to sanitize
     * @return          Sanitized text
     */
    public function sanitizeSearch($text) {
        $matches = [];
        $regex = '/"[^"]+"(\s+@[0-9]+)?|[-+~]?[^-+~<>\(\)"@\s]+/';
        preg_match_all($regex, $text, $matches);

        return implode(' ', $matches[0]);
    }


    /**
     * Adds an OR WHERE clause to perform a MySQL full text search.
     *
     * @param string $field         Database column name
     * @param string $text          Text to search for
     *
     * @return Builder              Scoped query
     */
    public function scopeOrWhereText($query, $fields, $text) {
        return $query->whereText($fields, $text, 'or');
    }


    /**
     * Restrict the query to the results related to current user.
     *
     * This method assumes that the database table contains a 'user_id'
     * field with the unique identifiers for the users. If no user is
     * currently authenticated, the query will be corrupted and thus will
     * not return any results.
     */
    public function scopeForUser($query) {
        if (Auth::check() === false) {
            return $query->corrupt();
        }

        return $query->where('user_id', Auth::id());
    }


    /**
     * Scope a query to return a 'cards' representation of the data.
     *
     * This convenience method selects a minimal representation of the
     * model fields, and it is used to show a JSON representation of the
     * model's data to the user.
     *
     * If the $id parameter is provided the query will be restricted to the
     * object with the provided primary key and a 'cards' representation for
     * each of the includable model's relations will be eager loaded along
     * with the model {@see scopeIncludeAll}.
     *
     * @param mixed $id             Optional. Primary key of an object
     * @param mixed $relation       Optional. Relation being queried
     * @return Builder              Scoped query
     */
    public function scopeCards($query, $id = null, $relation = null) {
        // Select all non-hidden columns on the model

        $query->select($this->getCardKeys());

        // Select a single object an all of its relations

        if (!is_null($id)) {
            $query->includeAll();
            $query->whereId($id);
        }

        return $query;
    }


    /**
     * Returns the column names defined on the $fields array of the
     * model. This method ignores all the fiels marked as hidden and
     * any fields defined array qualifiers.
     *
     * @return array    Column names array
     */
    public function getCardKeys() {
        if (empty(static::$fields)) {
            return [];
        }

        $keys = array_keys(static::$fields);

        $keys = array_filter($keys, function($key) {
            return preg_match('/^[a-zA-Z_][a-zA-Z0-9_]*$/', $key);
        });

        $keys = array_diff($keys, $this->hidden, [$this->primaryKey]);
        $count = array_unshift($keys, $this->getKeyName());

        return $keys;
    }


    /**
     * Filters a query by the values provided on the request object.
     *
     * This method validates the provided Request object against the model
     * $fields rules and then adds WHERE clauses to the query to scope it
     * to only the requested values.
     *
     * By default, the equality comparator is applied. To perform more
     * complex filters the following prefixes are allowed on the request:
     *
     *     min-{column}     :   WHERE column >= value
     *     max-{column}     :   WHERE column <= value
     *     has-{column}     :   WHERE column LIKE '%value%'
     *
     * For the equality filters an array of values may be provided instead
     * of a single value; in which case a WHERE IN clause is added to the
     * query in order to return all the results containing any of the
     * provided values on the array.
     *
     * If the validation fails, an exception is thrown.
     *
     * @param Request $request      HTTP request object
     * @return Builder              Scoped query
     *
     * @throws ValidationException  If validation fails
     */
    public function scopeFilter($query, Request $request) {
        $values = [
            'eqs' =>  [],
            'not' =>  [],
            'has' =>  [],
            'min' => [],
            'max' => []
        ];

        // Extract and classify the filters. If the field exists on the
        // $fields array, it is an equality comparison; otherwise, we
        // classify it according to it's prefix

        foreach ($request->all() as $field => $value) {
            if (key_exists($field, static::$fields)) {
                $values['eqs'][$field] = $value;
                continue;
            }

            $match = explode('-', $field);

            if (count($match) === 2) {
                $prefix = $match[0];
                $key = $match[1];

                if (!key_exists($prefix, $values))
                    continue;

                if (!key_exists($key, static::$fields))
                    continue;

                $values[$prefix][$key] = $value;
            }
        }

        // Validate the input filters. For the equality filters we validate
        // each input individually since they may be arrays of values.

        $rules = static::$fields;

        foreach ($values as $prefix => $input) {
            if ($prefix !== 'eqs' && $prefix !== 'not') {
                static::validateArray($input, $rules);
                continue;
            }

            foreach ($input as $key => $filters) {
                if (!is_array($filters)) {
                    static::validateArray(
                        [$key => $filters], $rules);
                } else {
                    foreach ($filters as $filter) {
                        static::validateArray(
                            [$key => $filter], $rules);
                    }
                }
            }
        }

        // Apply the filters to the query according to their classification
        // and the number of provided values

        foreach ($values as $prefix => $input) {
            foreach ($input as $key => $value) {
                if (empty($value)) {
                    continue;
                }

                switch ($prefix) {
                    case 'has':
                        $query->whereContains($key, $value);
                        break;
                    case 'min':
                        $query->where($key, '>=', $value);
                        break;
                    case 'max':
                        $query->where($key, '<=', $value);
                        break;
                    case 'not':
                        $query = (is_array($value)) ?
                            $query->whereNotIn($key, $value) :
                            $query->where($key, '!=', $value);
                        break;
                    default:
                        $query = (is_array($value)) ?
                            $query->whereIn($key, $value) :
                            $query->where($key, '=', $value);
                }
            }
        }

        // If a 'search' parameter was provided, filter the query by
        // the searchable fields values; performing a full-text search
        // or a where-like search were appropriate

        $search = $request->get('search');
        $fields = $this->searchable;

        if (is_array($search)) {
            $search = (count($search) > 0) ? $search[0] : null;
        }

        if (!empty($search) && !empty($fields)) {
            $query->where(function($query) use ($search, $fields) {
                $text = rawurldecode($search);

                $fulltextKeys = array_keys(
                    array_filter($fields, function($value) {
                        return $value === 'text';
                    })
                );

                // Full text search

                if (count($fulltextKeys) > 0) {
                    $query->orWhereText($fulltextKeys, $text);
                }

                // Where-Like search

                foreach ($fields as $field => $searchType) {
                   if ($searchType === 'string') {
                       $query->orWhereContains($field, $text);
                   }
                }
            });
        }

        return $query;
    }


    /**
     * Scope a query to select related models along with the results.
     *
     * This method eager loads a minimal representation (as defined in the
     * model scopeCards method) of each requested relation. It assumes that
     * an $includable array property is defined on the model with the list
     * of relations that may be eager loaded automatically.
     *
     * The provided Request object must include a 'with' parameter with the
     * relations to load; otherwise, no relation will be included.
     *
     * @param  Request $request     HTTP request object
     * @return Builder              Scoped query
     *
     * @throws ValidationException  If the request's 'with' parameter is
     *                              not an array
     */
    public function scopeInclude($query, Request $request) {
        $this->validateArray($request->all(), ['with' =>  'array']);
        $relations = $request->get('with');

        if (empty($relations) || empty($this->includable)) {
            return $query;
        }

        foreach ($relations as $relation) {
            if (in_array($relation, $this->includable)) {
                $query->with([$relation => function($query) use ($relation) {
                    $query->cards(null, $relation);
                }]);
            }
        }

        return $query;
    }


    /**
     * Scope a query to select all the related models.
     *
     * This method eager loads a minimal representation of all the
     * includable relations for the model {@see scopeInclude}.
     *
     * @return Builder              Scoped query
     */
    public function scopeIncludeAll($query) {
        if (empty($this->includable)) {
            return $query;
        }

        foreach ($this->includable as $relation) {
            $query->with([$relation => function($query) use ($relation) {
                $query->cards(null, $relation);
            }]);
        }

        return $query;
    }


    /**
     * Adds an ORDER BY clause to the query to sort it.
     *
     * The query is sorted by the provided fields on the Request's sort[]
     * parameter in the order that they are given. The field names can be
     * prefixed with a minus symbol to indicate a descending order.
     *
     * The allowed fields for sorting must be defined on the model's $field
     * array, otherwise the field will be ignored.
     *
     * The provided Request object must include a 'sort' parameter with the
     * columns to use for sorting; otherwise, the query is sorted by the
     * model's primary key column.
     *
     * The special $ prefix sorts the results by how closely the searched
     * text matches the result. To use the $ prefix the column must be
     * on the model's $searchable array and the request must include a
     * 'search' parameter with exactly one search value.
     *
     * @param  Request $request     HTTP request object
     * @return Builder              Scoped query
     *
     * @throws ValidationException  If the request's 'sort' parameter is
     *                              not an array
     */
    public function scopeSort($query,  Request $request) {
        $this->validateArray($request->all(), ['sort' =>  'array']);
        $fields = $request->get('sort');

        // Set a default order for the query

        if (empty($fields) || empty(static::$fields)) {
            return $query->orderBy($this->primaryKey, 'asc');
        }

        // Order by the provided fields

        $sortable = array_keys(static::$fields);

        foreach ($fields as $field) {
            if (empty($field)) {
                continue;
            }

            // Set the direction and sort column

            $sign = $field[0];
            $direction = 'asc';
            $column = $field;

            if ($sign === '-') {
                $direction = 'desc';
                $column = substr($field, 1);
            } else if ($sign === '+') {
                $column = substr($field, 1);
            }

            // Add an order clause to the query. The signs +/- indicate
            // the direction and the sign $ orders the query by a search
            // clausule match.

            if ($sign === '$') {
                $column = substr($field, 1);
                $search = $request->get('search');

                try {
                    if (key_exists($column, $this->searchable)) {
                        $query->orderByMatch($column, $search);
                    }
                } catch (\Exception $e) {
                    // pass
                }
            } else if (in_array($column, $sortable)) {
                $query->orderBy($column, $direction);
            }
        }

        return $query;
    }


    /**
     * Limit and paginate the given query.
     *
     * This convenience method set a limit on the query and returns the
     * default Laravel paginator for the query. The limit is obtained from
     * the Request object 'limit' parameter and is validated against a
     * minimum and a maximum limit.
     *
     * The default and maximum limits for the pagination can be set on
     * the application configuration file by setting the 'app.max_limit' and
     * 'app.limit' to suitable values.
     *
     * @param  Request $request     HTTP request object
     * @return LengthAwarePaginator Paginator object
     *
     * @throws ValidationException  If the request's 'limit' parameter is
     *                              not valid
     */
    public function scopePaginateRequest($query, Request $request) {
        $maxLimit = config('app.max_limit', static::MAX_LIMIT);
        $defLimit = config('app.limit', static::LIMIT);

        $this->validateArray($request->all(), [
            'limit' => "integer|min:1|max:$maxLimit"
        ]);

        $limit = $request->get('limit', $defLimit);

        return $query->paginate($limit);
    }


    /**
     * Calls a function while preventing any events registered on
     * the model from being dispatched. This method may be used to
     * temporarily prevent the model observers from firing.
     *
     * @param \Closure $closure     Closure instance
     * @return                      Closure results
     */
    public function preventEvents(\Closure $closure) {
        $dispatcher = static::getEventDispatcher();
        static::unsetEventDispatcher();
        $result = $closure();
        static::setEventDispatcher($dispatcher);

        return $result;
    }

}
