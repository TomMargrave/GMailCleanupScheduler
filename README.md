# GMailCleanupScheduler
Gmail Label Cleaner is a Google Apps Script designed to automate the deletion of old emails within specific Gmail labels. It allows users to set customizable time thresholds for automatic email cleanup, facilitating efficient label management and decluttering of email archives.

Certainly! Here's a step-by-step guide to installing this code in Google Drive and configuring it to run on a schedule using Google Apps Script:

### Installing Code in Google Drive:

1. **Access Google Drive:**
   - Go to [Google Drive](https://drive.google.com/) and sign in with your Google account.

2. **Create a New Script:**
   - Click on the "+ New" button.
   - Go to "More" and select "Google Apps Script". This will open the Google Apps Script editor.

3. **Copy and Paste Code:**
   - Copy the code provided earlier.
   - Paste the code into the Apps Script editor.

4. **Save the Script:**
   - Click on "File" > "Save" to save the script.
   - Give your script a name and click "OK".

### Configuring to Run on Schedule:

Now, to configure the script to run on a schedule:

1. **Open Script Editor:**
   - In the Apps Script editor, click on the clock icon (Triggers) in the toolbar.

2. **Create a New Trigger:**
   - Click on the "+ Add Trigger" button at the bottom right corner.

3. **Configure Trigger Settings:**
   - Choose the function to run (`cleanLBL` in this case).
   - Choose event source as "Time-driven".
   - Select how often you want the script to run (e.g., daily, weekly, etc.).
   - Set the time you want the script to run.

4. **Save Trigger:**
   - Click on "Save".

### Authorization and Permissions:

When you first run the script or set up the trigger, it may ask for authorization to access your Gmail and other services. Follow the prompts to grant the necessary permissions for the script to access and manage your Gmail account.

### Verification:

After setting up the trigger, the script will automatically execute at the scheduled time. You can check the Google Apps Script dashboard for execution logs and verify if the script is running successfully.

### Notes:

- Ensure that the Gmail account you're using with this script has the necessary permissions to access the labels and perform actions like moving emails to trash.
- Regularly check the script's execution logs and Gmail to ensure it's working as intended.

This should guide you through installing the code into Google Drive and setting it up to run on a schedule using Google Apps Script. If you encounter any issues or need further clarification, feel free to ask!
