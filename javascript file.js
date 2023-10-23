 function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    
  }

   function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    switch (data) {
      case "layout":
      var layoutTableHTML = "<table class='layoutTable'><tr><td class='tr-1'></td><td></td></tr><tr><td><div class='container-2'><div class='left-1'></div><div class='right-1'></div></div></td><td><div class='container-1'><div class='top'></div><div class='bottom'> <button id='save' >Save</button><button id='clear-all-button' class='clear-all-button' >Clear</button></div></div></td></tr></table>";
  
  // Create a new element to hold the layout table
  var layoutTable = document.createElement("div");
  
  // Set the HTML content of the new element
  layoutTable.innerHTML = layoutTableHTML;
  
  // Append the layout table to the drop target
  event.target.appendChild(layoutTable);
  break;
        
  case "label":
  // Create a new label box div and set its content
  var label = document.createElement("div");
        label.setAttribute("contenteditable", "true");
        label.setAttribute("spellcheck", "false");
        label.innerText = "Edit me"; // Default label text
        label.className = "editable-label dropped-item";
        var labelActions = document.createElement("div");
  labelActions.className = "label-actions";

  // Add the action icons (you can use font icons or image icons)
  labelActions.innerHTML = `
    <button onclick="document.execCommand('bold', false, null)"><strong>B</strong></button>
    <button onclick="document.execCommand('italic', false, null)"><em>I</em></button>
    <button onclick="document.execCommand('underline', false, null)"><u>U</u></button>
    <input type="color" onchange="document.execCommand('foreColor', false, this.value)">
  `;

  // Append the label and action icons to the drop target
  label.appendChild(labelActions);
  event.target.appendChild(label);
       
  break;

      case "textbox":
      var textbox = document.createElement("div");
  textbox.setAttribute("contenteditable", "true");
  textbox.setAttribute("spellcheck", "false");
  textbox.innerText = "Edit and add text here"; // Default text
  textbox.className = "editable-text-box dropped-item";
  
  var textBoxActions = document.createElement("div");
  textBoxActions.className = "text-box-actions";

  // Add the action icons (you can use font icons or image icons)
  textBoxActions.innerHTML = `
    <button onclick="document.execCommand('bold', false, null)"><strong>B</strong></button>
    <button onclick="document.execCommand('italic', false, null)"><em>I</em></button>
    <button onclick="document.execCommand('underline', false, null)"><u>U</u></button>
    <input type="color" onchange="document.execCommand('foreColor', false, this.value)">
  `;

  // Append the text box and action icons to the drop target
  textbox.appendChild(textBoxActions);
  event.target.appendChild(textbox);
        break;
        case "Button":
  // Create a new button box div
  var buttonBox = document.createElement("div");
  buttonBox.className = "button-box dropped-item";

  // Create a button element
  var button = document.createElement("button");
  button.innerText = "Button"; // Default button text
  button.contentEditable = "true"; // Make the button text editable

  // Add a click event listener to change the button color
  button.addEventListener("click", function() {
    // Change the button's background color to a new color
    button.style.backgroundColor = "#45ec9e"; // You can set your desired color
  });

  // Append the button to the button box
  buttonBox.appendChild(button);

  event.target.appendChild(buttonBox);
  break;
  case "Dropdown":
      // Create a new dropdown div
      var Dropdown = document.createElement("div");
      Dropdown.className = "dropped-item";

      // Create a select element for the dropdown
      var select = document.createElement("select");
      select.className = "dropdown-select";

      // Define an array of weekdays
      var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];

      // Create options for each weekday
      for (var i = 0; i < weekdays.length; i++) {
        var option = document.createElement("option");
        option.value = weekdays[i];
        option.text = weekdays[i];
        select.appendChild(option);
      }

      // Append the select element to the dropdown div
      Dropdown.appendChild(select);

      // Append the dropdown to the drop target
      event.target.appendChild(Dropdown);
      break;
  

      case "Checkbox":
        // Create a container div for checkboxes and input fields
        var container = document.createElement("div");
        container.className = "dropped-item";

        // Create a checkbox group div
        var checkboxGroup = document.createElement("div");
        checkboxGroup.className = "checkbox-group";

        // Create three checkboxes and input fields
        for (var i = 0; i < 3; i++) {
          var checkboxContainer = document.createElement("div");
          checkboxContainer.className = "checkbox-container";

          // Create a checkbox
          var Checkbox = document.createElement("input");
          Checkbox.type = "checkbox";
          Checkbox.name = "checkboxGroup";
          Checkbox.id = "checkbox" + (i + 1);
          Checkbox.value = "checkbox" + (i + 1);

          // Create an input field
          var input = document.createElement("input");
          input.type = "text";
          input.placeholder = "Enter user data here";
          input.style.width = "50%";

          // Append the checkbox and input field to the checkboxContainer
          checkboxContainer.appendChild(Checkbox);
          checkboxContainer.appendChild(input);

          // Append the checkboxContainer to the checkboxGroup
          checkboxGroup.appendChild(checkboxContainer);
        }

        // Append the checkboxGroup to the container
        container.appendChild(checkboxGroup);

        // Append the container to the drop target
        event.target.appendChild(container);
        break;
  
        case "Radiobutton":
        // Create a container div for radio buttons and input fields
        var container = document.createElement("div");
        container.className = "dropped-item";

        // Create a radio group div
        var radioGroup = document.createElement("div");
        radioGroup.className = "radio-group";

        // Create three radio buttons and input fields
        for (var i = 0; i < 3; i++) {
          var radioContainer = document.createElement("div");
          radioContainer.className = "radio-container";

          // Create a radio button
          var radio = document.createElement("input");
          radio.type = "radio";
          radio.name = "radioGroup";
          radio.id = "radio" + (i + 1);
          radio.value = "radio" + (i + 1);

          // Create an input field
          var input = document.createElement("input");
          input.type = "text";
          input.placeholder = "Enter user data here";
          input.style.width = "50%";

          // Append the radio button and input field to the radioContainer
          radioContainer.appendChild(radio);
          radioContainer.appendChild(input);

          // Append the radioContainer to the radioGroup
          radioGroup.appendChild(radioContainer);
        }

        // Append the radioGroup to the container
        container.appendChild(radioGroup);

        // Append the container to the drop target
        event.target.appendChild(container);
        break;
        case "Table":
        // Create a container div for the table
        var tableContainer = document.createElement("div");
        tableContainer.className = "table-container dropped-item";

        // Create a table element
        var table = document.createElement("table");

        // Create 2 rows with 3 columns (td) each
        for (var row = 1; row <= 2; row++) {
          var tr = document.createElement("tr");
          for (var col = 1; col <= 3; col++) {
            var td = document.createElement("td");
            var input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Enter data";
            input.addEventListener("input", function() {
              this.classList.add("hide-border"); // Add the class to hide the border
            });
            td.appendChild(input);
            tr.appendChild(td);
          }
          table.appendChild(tr);
        }

        // Append the table to the tableContainer
        tableContainer.appendChild(table);

        // Append the tableContainer to the drop target
        event.target.appendChild(tableContainer);
        break;
        case "Navigation":
        // Create a container for the link box
        var linkBox = document.createElement("div");
        linkBox.className = "link-box dropped-item";

        // Create an input element for the link
        var linkInput = document.createElement("input");
        linkInput.type = "text";
        linkInput.placeholder = "Enter a link";

        // Create a button to redirect to the link in a new tab
        var redirectButton = document.createElement("button");
        redirectButton.innerText = "Go";
        redirectButton.addEventListener("click", function() {
          var link = linkInput.value;
          if (link) {
            window.open(link, '_blank');
          }
        });

        // Append the input and button to the link box
        linkBox.appendChild(linkInput);
        linkBox.appendChild(redirectButton);

        // Append the link box to the drop target
        event.target.appendChild(linkBox);
        break;
        case "image":
        // Create an image box
        var imageBox = document.createElement("div");
        imageBox.className = "image-box dropped-item";

        // Create an image element
        var image = document.createElement("img");
        image.src = ""; // Default image source (empty)
        image.alt = "Image"; // Default alt text
        image.className = "image-control";

        // Create settings for image
        var imageSettings = document.createElement("div");
        imageSettings.className = "image-settings";

        var widthLabel = document.createElement("label");
        widthLabel.textContent = "Width:";
        var widthInput = document.createElement("input");
        widthInput.type = "number";
        widthInput.value = 200; // Default width value
        widthInput.addEventListener("input", function () {
          image.style.width = this.value + "px";
        });

        var heightLabel = document.createElement("label");
        heightLabel.textContent = "Height:";
        var heightInput = document.createElement("input");
        heightInput.type = "number";
        heightInput.value = 150; // Default height value
        heightInput.addEventListener("input", function () {
          image.style.height = this.value + "px";
        });

        var uploadButton = document.createElement("button");
        uploadButton.textContent = "Upload Image";
        uploadButton.addEventListener("click", function () {
          var input = document.createElement("input");
          input.type = "file";
          input.accept = "image/*";
          input.addEventListener("change", function () {
            if (this.files.length > 0) {
              var file = this.files[0];
              var reader = new FileReader();
              reader.onload = function () {
                image.src = reader.result;
              };
              reader.readAsDataURL(file);
            }
          });
          input.click();
        });

        // Append settings to the image settings
        imageSettings.appendChild(widthLabel);
        imageSettings.appendChild(widthInput);
        imageSettings.appendChild(heightLabel);
        imageSettings.appendChild(heightInput);
        imageSettings.appendChild(uploadButton);

        // Append the image and settings to the image box
        imageBox.appendChild(image);
        imageBox.appendChild(imageSettings);

        // Append the image box to the drop target
        event.target.appendChild(imageBox);
        break;
      default:
        // Handle unsupported button types or errors
        break;
    }
    document.getElementById("clear-all-button").addEventListener("click", function() {
  // Select all elements with the class 'dropped-item' and remove them
  var droppedItems = document.querySelectorAll(".dropped-item");
  droppedItems.forEach(function(item) {
    item.remove();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var previewButton = document.getElementById("preview");

  previewButton.addEventListener("click", function () {
    // Create a new window or tab
    var previewWindow = window.open("", "_blank");

    // Get the content from the design page
    var designPageContent = document.getElementById("page").innerHTML;

    // Set the content of the new window or tab
    previewWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Preview</title>
      </head>
      <body>
        ${designPageContent}
      </body>
      </html>
    `);

    // Close the document for writing
    previewWindow.document.close();
  });
});





   
  }