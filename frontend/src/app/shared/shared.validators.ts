import { FormControl, ValidationErrors } from '@angular/forms';


export class SharedValidators {


    /**
     * Requires a control value to be a valid HTTP URL. If no protocol
     * is specified, the current document base URL is used to validate
     * relative paths; unless the 'absolute' flag was set to true.
     *
     * @param control   Form control
     * @param absolute  If the URL must be absoulte
     *
     * @returns         Validation errors or null
     */
    public static http(absolute: boolean): ValidationErrors | null {
        return (control: FormControl) => {
            const value = control.value;

            let url = null;
            let valid = false;

            // Do not validate empty input values

            if (value == null || value.length === 0) {
                return null;
            }

            // Validate absolute and relative URLs and check that
            // the protocol is also valid

            try {
                const base = document.baseURI;
                const href = value.trim();
                const isAbsolute = absolute || /^[a-z]+:\/\//.test(href);

                url = isAbsolute ? new URL(href) : new URL(`${base}/${href}`);
                valid = /^https?:$/.test(url.protocol);
            } catch (e) {}

            return valid ? null : { http: url ? url.toString() : null };
        }
    }


    /**
     * Requires a control value to be a valid URL slug.
     *
     * @param control   Form control
     * @returns         Validation errors or null
     */
    public static slug(control: FormControl): ValidationErrors | null {
        const slug = control.value ? control.value.trim() : null;
        const valid = /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug);

        return valid ? null : { slug: slug };
    }


    /**
     * Requires a control value to be a valid Twitter username.
     *
     * @param control   Form control
     * @returns         Validation errors or null
     */
    public static twitter(control: FormControl): ValidationErrors | null {
        const name = control.value ? control.value.trim() : null;
        const valid = /^@?[a-zA-Z0-9_]{1,15}$/.test(name);

        return valid ? null : { twitter: name };
    }

}
