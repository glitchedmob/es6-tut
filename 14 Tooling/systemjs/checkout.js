export function addTax(amount, taxRate = 0.15) {
	return amount + (amount * taxRate)
}