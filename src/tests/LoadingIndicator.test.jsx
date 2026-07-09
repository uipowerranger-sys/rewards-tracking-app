import {
    render,
    screen
}
    from "@testing-library/react";

import LoadingIndicator
    from "../components/LoadingIndicator/LoadingIndicator";

test("renders loading state", () => {
    render(<LoadingIndicator />);
    expect(screen.getByText(/Loading rewards data/i)).toBeInTheDocument();
});