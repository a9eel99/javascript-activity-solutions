function assignSection(ticketNumber) {
    if (ticketNumber % 2 === 0) {
        return `Ticket ${ticketNumber} → Section A (Even)`;
    } else {
        return `Ticket ${ticketNumber} → Section B (Odd)`;
    }
}
const assignSectionShort = (ticket) => 
    ticket % 2 === 0 ? "Section A" : "Section B";
console.log(assignSection(1024)); 
console.log(assignSection(567));  
console.log(assignSection(100));  
console.log(assignSection(99)); 
