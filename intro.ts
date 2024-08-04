function xy(name:string, hi: boolean): void {
    if (hi) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log(`Goodbye, ${name}.`);
    }
}

xy("", false);
export{}
