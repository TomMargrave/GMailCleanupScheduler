/**
 * Deletes old emails based on the specified label and days threshold.
 * @param {string} labelName - The name of the label to filter emails.
 * @param {number} daysThreshold - The threshold in days to determine old emails for deletion.
 */
function deleteOldEmails(labelName, daysThreshold) {
  var label = null;

  // Checking if labelName parameter is provided
  if (labelName) {
    label = GmailApp.getUserLabelByName(labelName);
  } else {
    throw new Error("Missing required parameter: labelName");
  }

  // Checking if daysThreshold parameter is provided, otherwise default to 10 days
  if (daysThreshold) {
    daysThreshold *= 24 * 60 * 60 * 1000; // Convert days to milliseconds
  } else {
    daysThreshold = 10 * 24 * 60 * 60 * 1000; // Default to 10 days
  }

  var now = new Date();
  var thresholdDate = new Date(now.getTime() - daysThreshold);

  if (label) {
    console.log(label);
    var threads = label.getThreads();

    for (var i = 0; i < threads.length; i++) {
      var thread = threads[i];
      var oldestMessage = thread.getMessages()[0];

      // Checking if the oldest message in the thread is older than the threshold date
      if (oldestMessage.getDate() < thresholdDate) {
        console.log("Subj: " + oldestMessage.getSubject() + " DELETED");
        thread.moveToTrash();
      }
    }
  }
}

/**
 * Cleans specific labels by deleting old emails based on predefined days threshold.
 */
function cleanLBL() {
  deleteOldEmails("zz/z010 days", 7);   // Delete emails older than 7 days from "zz\\z010 days" label
  deleteOldEmails("zz/z090 days", 90);  // Delete emails older than 90 days from any label
  deleteOldEmails("zz/z365 days", 365); // Delete emails older than 365 days from "zz\\z365 days" label
}
