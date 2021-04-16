export const checkBudget = (budget, rest) => {
    let clase;

    if ((budget / 4) > rest) {
        clase = 'alert alert-danger text-white';
    } else if ((budget / 2) > rest) {
        clase = 'alert alert-warning text-white';
    } else {
        clase = 'alert alert-success';
    }

    return clase
}