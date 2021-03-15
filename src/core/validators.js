export class Validators {
    required(value = '') {
        return value && value.trim()
    }
}