import "@testing-library/jest-dom";


const originalError = console.error;


beforeAll(() => {

    console.error = (...args) => {

        if (
            typeof args[0] === "string" &&
            args[0].includes(
                "react-test-renderer is deprecated"
            )
        ) {
            return;
        }

        originalError.call(
            console,
            ...args
        );

    };

});


afterAll(() => {

    console.error = originalError;

});