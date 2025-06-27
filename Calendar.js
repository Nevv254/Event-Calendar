// Creating the array of events
let events = [
    {
        title: "Meeting",
        date: new Date(2025, 5, 28, 14, 0), // June 28th, 2025 at 2:00 PM
        location: "Conference Room A",
        attendees: new Set(["Omosa", "Kiptanui", "Alice"]),
        organizer: "Charlie" // Added manually, but will use WeakMap for dynamic addition
    },
    {
        title: "Presentation",
        date: new Date(2025, 5, 30, 10, 30), // June 30th, 2025 at 10:30 AM
        location: "Auditorium",
        attendees: new Set(["Mutune","Wallance", "Roy"]),
        organizer: "David"
    },
    {
        title: "Team Lunch",
        date: new Date(2025, 6, 3, 12, 0), // July 3rd, 2025 at 12:00 PM
        location: "Cafeteria",
        attendees: new Set(["Bob", "Eve"]),
        organizer: "Frank"
    }
];

// Function to add a new attendee to an event
function addAttendee(eventTitle, attendeeName) {
    let event = events.find(event => event.title === eventTitle);
    if (event) {
        event.attendees.add(attendeeName);
        console.log(`${attendeeName} added to ${eventTitle} attendees.`);
    } else {
        console.log(`Event '${eventTitle}' not found.`);
    }
}