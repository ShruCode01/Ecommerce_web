# ShruCart - Minimal Fashion Store

This is the source code for the ShruCart portfolio website.

## 🚀 How to Deploy to GitHub Pages (Fixing 404 Errors)

If you are seeing a **404 Not Found** error, it is likely because of how the files were uploaded. Follow these steps exactly:

### Option 1: Uploading to the Root (Recommended)
1. Go to your GitHub Repository.
2. Click **Add file** > **Upload files**.
3. **Important**: Drag and drop the **CONTENTS** of the `lunacart` folder (the `index.html`, `css` folder, `js` folder, etc.) directly into the upload box.
   - Do NOT drag the `lunacart` folder itself.
   - You should see `index.html` listed at the top level, not inside a folder.
4. Commit changes.
5. Go to **Settings** > **Pages**.
6. Set **Source** to `Deploy from a branch` and **Branch** to `main` (or `master`) and `/ (root)`.
7. Your site will be live at: `https://yourusername.github.io/repository-name/`

### Option 2: Uploading the Folder
If you uploaded the `lunacart` folder itself:
1. Your website is **not** at the main link.
2. It is located at: `https://yourusername.github.io/repository-name/lunacart/`

## 📂 Project Structure
Ensure your files are arranged exactly like this:

```
repository-name/
├── .nojekyll          (Prevents 404 errors)
├── index.html         (Main homepage)
├── about.html
├── gallery.html
├── contact.html
├── css/
│   └── style.css
└── js/
    └── script.js
```
