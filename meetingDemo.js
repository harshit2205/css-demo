function launchDatePicker() {
    console.log("launch picker called");

    var datePickerDiv = document.getElementById('date-picker');
    datePickerDiv.style.display = 'block';

    //Create a new date picker
    let myPicker = new SimplePicker(datePickerDiv);

    // /Open/close the date picker.
    myPicker.open();

    myPicker.on('submit', function(date, readableDate) {
        // ...
        document.getElementById('input-date').value = date;
    });

    myPicker.on('close', function(date) {
        // ...
        datePickerDiv.style.display = "none";
    })

}