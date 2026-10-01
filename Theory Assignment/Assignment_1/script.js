// ========================================
// NOTES APP
// LocalStorage + JSON
// ========================================


// Get HTML elements

const noteInput =
    document.getElementById("noteInput");

const addNoteBtn =
    document.getElementById("addNoteBtn");

const notesList =
    document.getElementById("notesList");

const emptyMessage =
    document.getElementById("emptyMessage");

const noteCount =
    document.getElementById("noteCount");


// ========================================
// GET NOTES FROM LOCAL STORAGE
// ========================================

function getNotes() {

    const storedNotes =
        localStorage.getItem("notes");

    if (storedNotes) {

        return JSON.parse(storedNotes);

    }

    return [];
}


// ========================================
// SAVE NOTES TO LOCAL STORAGE
// ========================================

function saveNotes(notes) {

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

}


// ========================================
// ADD NEW NOTE
// ========================================

function addNote() {

    const text = noteInput.value.trim();


    // Do not allow empty notes

    if (text === "") {

        alert("Please write something before adding a note.");

        return;
    }


    // Get existing notes

    const notes = getNotes();


    // Create new note object

    const newNote = {

        id: Date.now(),

        text: text,

        createdAt:
            new Date().toISOString(),

        updatedAt: null

    };


    // Add note to array

    notes.push(newNote);


    // Save updated array

    saveNotes(notes);


    // Clear textarea

    noteInput.value = "";


    // Display updated notes

    renderNotes();

}


// ========================================
// DELETE NOTE
// ========================================

function deleteNote(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this note?");


    if (!confirmDelete) {
        return;
    }


    // Remove selected note

    const notes =
        getNotes().filter(
            note => note.id !== id
        );


    // Save changes

    saveNotes(notes);


    // Refresh notes display

    renderNotes();

}


// ========================================
// EDIT NOTE
// ========================================

function editNote(id) {

    const notes = getNotes();


    // Find selected note

    const note =
        notes.find(
            note => note.id === id
        );


    if (!note) {
        return;
    }


    // Ask user for new text

    const newText =
        prompt(
            "Edit your note:",
            note.text
        );


    // User pressed Cancel

    if (newText === null) {
        return;
    }


    // Remove unnecessary spaces

    const updatedText =
        newText.trim();


    // Do not allow empty note

    if (updatedText === "") {

        alert("Note cannot be empty.");

        return;
    }


    // Update note

    note.text = updatedText;

    note.updatedAt =
        new Date().toISOString();


    // Save updated notes

    saveNotes(notes);


    // Refresh display

    renderNotes();

}


// ========================================
// FORMAT DATE
// ========================================

function formatDate(dateString) {

    const date =
        new Date(dateString);


    return date.toLocaleString();

}


// ========================================
// DISPLAY NOTES
// ========================================

function renderNotes() {

    const notes = getNotes();


    // Clear old HTML

    notesList.innerHTML = "";


    // Update note count

    if (notes.length === 1) {

        noteCount.textContent =
            "1 Note";

    } else {

        noteCount.textContent =
            notes.length + " Notes";

    }


    // Show empty message if no notes

    if (notes.length === 0) {

        emptyMessage.style.display =
            "block";

        return;

    }


    // Hide empty message

    emptyMessage.style.display =
        "none";


    // Display newest note first

    const reversedNotes =
        [...notes].reverse();


    reversedNotes.forEach(note => {

        // Create note card

        const noteCard =
            document.createElement("div");


        noteCard.className =
            "note-card";


        // Note text

        const noteText =
            document.createElement("p");


        noteText.className =
            "note-text";


        noteText.textContent =
            note.text;


        // Date

        const noteDate =
            document.createElement("div");


        noteDate.className =
            "note-date";


        let dateInformation =
            "Created: " +
            formatDate(note.createdAt);


        // Show updated time if edited

        if (note.updatedAt) {

            dateInformation +=
                " | Updated: " +
                formatDate(note.updatedAt);

        }


        noteDate.textContent =
            dateInformation;


        // Actions container

        const actions =
            document.createElement("div");


        actions.className =
            "note-actions";


        // Edit Button

        const editButton =
            document.createElement("button");


        editButton.textContent =
            "Edit";


        editButton.className =
            "edit-btn";


        editButton.addEventListener(
            "click",
            function () {

                editNote(note.id);

            }
        );


        // Delete Button

        const deleteButton =
            document.createElement("button");


        deleteButton.textContent =
            "Delete";


        deleteButton.className =
            "delete-btn";


        deleteButton.addEventListener(
            "click",
            function () {

                deleteNote(note.id);

            }
        );


        // Add buttons

        actions.appendChild(
            editButton
        );


        actions.appendChild(
            deleteButton
        );


        // Add everything to note card

        noteCard.appendChild(
            noteText
        );


        noteCard.appendChild(
            noteDate
        );


        noteCard.appendChild(
            actions
        );


        // Add card to page

        notesList.appendChild(
            noteCard
        );

    });

}


// ========================================
// ADD BUTTON EVENT
// ========================================

addNoteBtn.addEventListener(
    "click",
    addNote
);


// ========================================
// CTRL + ENTER TO ADD NOTE
// ========================================

noteInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.ctrlKey &&
            event.key === "Enter"
        ) {

            addNote();

        }

    }
);


// ========================================
// LOAD NOTES WHEN PAGE OPENS
// ========================================

renderNotes();