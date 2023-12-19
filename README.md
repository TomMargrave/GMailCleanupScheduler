# GMail Cleanup Scheduler

GMail Cleanup Scheduler is a Google Apps Script that automates the deletion of old emails within specific Gmail labels. This script helps manage and declutter your Gmail inbox by allowing customized time thresholds for automatic email cleanup.

## Features

- **Automated Email Cleanup:** Deletes old emails based on specified label names and time thresholds.
- **Customizable Thresholds:** Set days thresholds to manage the age of emails for deletion.
- **Flexible Label Management:** Enables targeted label-based cleanup for better email organization.

## Installation and Setup

1. **Google Drive:**
   - Open Google Drive and create a new Google Apps Script.
   - Copy the code provided in the `code.gs` file into your script.

2. **Configuration:**
   - Customize the script by specifying label names and days thresholds in the `deleteOldEmails` function.
   
3. **Authorization:**
   - Run the script to authorize access to your Gmail account and grant necessary permissions.

4. **Schedule Execution:**
   - Configure the script to run on a schedule using Google Apps Script triggers.

## Usage

- Run the `cleanLBL` function to initiate the automated email cleanup process.

## Example

Here's an example of usage in the script:

```javascript
// Deleting emails older than 7 days from "zz/z010 days" label
deleteOldEmails("zz/z010 days", 7);

// Deleting emails older than 90 days from any label
deleteOldEmails("zz/z090 days", 90);

// Deleting emails older than 365 days from "zz/z365 days" label
deleteOldEmails("zz/z365 days", 365);
