import { google } from "googleapis";

export async function appendToSheet(sheetName: string, values: string[]) {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,

    range: `${sheetName}!A:Z`,

    valueInputOption: "USER_ENTERED",

    requestBody: {
      values: [values],
    },
  });
}
