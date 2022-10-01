import { Either, left, right } from "fp-ts/lib/Either";

type Try<T> = Either<Error, T>;
type TryAsync<T> = Promise<Try<T>>;

function errorToTry<T>(e: any): Try<T> {
    if (e instanceof Error) {
        return left(e);
    }
    else {
        return left(new Error(String(e)));
    }
}

function tryAsync_<T>(f: () => Promise<T>): TryAsync<T> {
    try {
        return f().then(right).catch(e => errorToTry<T>(e));
    }
    catch (e) {
        return Promise.resolve(errorToTry<T>(e))
    }
}

function try_<T>(f: () => T): Try<T> {
    try {
        return right(f());
    }
    catch (e) {
        return errorToTry<T>(e);
    }
}

export function run(): any {

    try_(() => {

    });

    return 1;
}