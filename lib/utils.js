// lib/utils.js
// This is a mock implementation for the browser environment
export function cn(...inputs) {
    return inputs.filter(Boolean).join(" ");
}
