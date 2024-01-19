function verifyCertificate() {
    var customId = document.getElementById('customId').value;

    var validIds = ["123", "abc", "456","def"];

    if (validIds.includes(customId)) {
        document.getElementById('result').innerHTML = "<p>Certificate Verified! Displaying Certificate for ID: " + customId + "</p>";
        result.style.color="green"; 

    } else {
        document.getElementById('result').innerHTML = "<p>Invalid ID. Please enter a valid ID.</p>";
        result.style.color="red"; 
    }
}
