<?php

namespace Seidor\Foundation;

use DateTime;
use InvalidArgumentException;
use Validator;

class Validators {
    
    
    /**
     * Validates the given value as an ISO8601-like date.
     *
     * Note that this method checks that a value is a valid date according
     * to the format 'Y-m-d\TH:i:s.uP'. This differs from the real ISO
     * standard in that it makes all format values mandatory.
     *
     * @param $attribute    Name of the attribute being validated
     * @param $value        Value of the attribute
     * @param $params       Validation rule parameters array
     * @param $validator    Current validator instance
     */
    public function date($attribute, $value, $params, $validator) {
        return DateTime::createFromFormat('Y-m-d\TH:i:s.uP', $value) !== false;
    }
    
    
    /**
     * Validates the given value as an URL slug.
     *
     * @param $attribute    Name of the attribute being validated
     * @param $value        Value of the attribute
     * @param $params       Validation rule parameters array
     * @param $validator    Current validator instance
     */
    public function slug($attribute, $value, $params, $validator) {
        return preg_match('/^[a-z0-9]+(-[a-z0-9]+)*$/', $value);
    }
    
    
    /**
     * Validates that the given value is either a PHP array or
     * a json string.
     *
     * @param $attribute    Name of the attribute being validated
     * @param $value        Value of the attribute
     * @param $params       Validation rule parameters array
     * @param $validator    Current validator instance
     */
    public function object($attribute, $value, $params, $validator) {
        return !Validator::make([$value], [0 => 'json'])->fails() ||
               !Validator::make([$value], [0 => 'array'])->fails();
    }

}