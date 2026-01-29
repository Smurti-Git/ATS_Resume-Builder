# 🚀 ATS Pro Resume Builder

An **ATS-optimized resume builder** that creates applicant tracking system (ATS) compliant resumes with verified 1-column format. This tool ensures your resume passes through automated screening while maintaining professional formatting and readability.

## ✨ Features

### 📝 ATS Optimization
- **Verified 1-column layout** - Single-column design optimized for ATS parsing
- **Minimal graphics** - Clean, text-focused format for maximum compatibility
- **Multiple font options** - Arial, Calibri, Helvetica, Verdana, Times New Roman, Georgia
- **Customizable margins** - Adjust page margins from 0.3 to 1.5 inches
- **ATS-friendly formatting** - No tables, images, or complex styling that breaks ATS parsing
- **Inline ATS tips** - Yellow tip boxes guide you toward ATS-compliant content

### 🎨 Live Editor & Preview
- **Real-time preview** - See changes instantly as you type
- **Split-view interface** - Edit on the left, preview on the right
- **Dynamic content management** - Add/remove experiences, projects, skills, and education
- **Pre-filled template** - Professional sample content ready for customization
- **Style controls** - Font and margin adjustments update resume in real-time

### 💾 History & Version Control
- **Save History** - Save multiple resume versions with timestamps
- **Resume History Panel** - Quick access to all saved versions
- **Load Previous Versions** - Restore any previous resume draft
- **Delete Versions** - Remove unwanted resume versions from history
- **LocalStorage Persistence** - Auto-save current draft while editing

### 📄 Export Options
- **Download as .Doc** - Microsoft Word compatible format with ATS styling
- **Print to PDF** - Browser-native print functionality (Ctrl+P / Cmd+P)
- **Export formatting** - All exports maintain ATS compliance

### 🎯 Resume Sections
- **Personal Info** - Name, job title, email, phone, social links
- **Professional Summary** - 2-3 line overview (ATS-tip guidance included)
- **Technical Skills** - Categorized by label (Languages, Tools, etc.)
- **Professional Experience** - Company, title, dates, and achievement bullets
- **Projects** - Portfolio projects with dates and results
- **Education** - Degree, institution, graduation year
- **Certifications & Achievements** - Additional qualifications and recognition

## 🔧 How to Use

1. **Open the file** - Double-click `index.html` or open it in your web browser (Chrome, Firefox, Safari, Edge)
2. **Edit left panel** - Fill in your resume information section by section
3. **Watch live preview** - Your changes appear instantly on the right side
4. **Save versions** - Click "Save History" to preserve different resume versions
5. **Customize style** - Adjust fonts and margins in the Style Controls section
6. **Export resume** - Click "Download .Doc" or "PDF Print" when finished

### Quick Tips
- ✅ Ensure job title matches the position description exactly
- ✅ Keep professional summary to 2-3 lines with years of experience
- ✅ Use action verbs and quantifiable results in bullet points
- ✅ Include relevant keywords from the job description naturally
- ✅ Organize technical skills by category (Languages, Tools, etc.)
- ✅ Save multiple versions for different job applications
- ✅ Use "PDF Print" preview to see exactly how ATS will parse your resume

## 📋 Data Structure

The application uses a centralized data model (`resumeData`) with metadata and persistent storage:

```javascript
{
  meta: { font, margin },           // Style configuration
  personal: { name, role, email, phone, links },
  summary: "Professional overview",
  skills: [{ label, items }],       // Categorized technical skills
  experience: [{ title, company, dates, bullets }],
  projects: [{ title, dates, bullets }],
  education: [{ deg, uni, year }],
  additional: "Certifications text"
}
```

**Data Persistence:**
- `currentResumeDraft` - Auto-saves while editing
- `resumeHistory` - Stores all saved versions with timestamps

## 🎨 Customization

### Styling
- **Editor UI**: Tailwind CSS (no external build required)
- **Resume Output**: ATS-optimized CSS with print settings
- **Font Control**: 6 professional font options (Arial, Calibri, Helvetica, Verdana, Times New Roman, Georgia)
- **Margin Control**: Adjustable from 0.3" to 1.5" with real-time preview
- **Custom Scrollbar**: Styled for modern appearance
- **Responsive Design**: Adapts to different screen sizes

### Customization Points
- Modify default `resumeData` in `script.js` to change sample content
- Adjust Tailwind classes in HTML for UI styling
- Modify print CSS in style.css for resume appearance
- Change color scheme by updating CSS variables

## ⚙️ Technical Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - No dependencies required
- **Google Fonts** - Material Symbols & Inter typeface

## 📥 Export Features

### Word Document (.doc)
- Click "Download .Doc" button to export
- Generates Office-compatible HTML format
- Includes ATS-optimized styling
- Preserves selected font and margins
- Filename: `ATS_Resume_[YourName].doc`

### PDF (Browser Print)
- Click "PDF Print" button or press Ctrl+P
- Use browser's native print dialog
- Select "Save as PDF" option
- Maintains all ATS compliance formatting
- Provides print preview before saving

## 🔒 Data & Privacy

- **100% Client-side processing** - All resume data stays in your browser
- **No server uploads** - Zero data collection or tracking
- **LocalStorage persistence** - Resumes auto-save locally while editing
- **Version history** - All saved versions stored locally
- **Offline capability** - Works offline without internet connection
- **Standalone file** - Single HTML file, no dependencies to install

## ✅ ATS Compliance Features

Every feature has been designed with ATS compatibility in mind:

- ✅ Verified 1-column layout
- ✅ No multi-column designs
- ✅ No tables or complex formatting
- ✅ No graphics or embedded images
- ✅ Multiple professional fonts available
- ✅ Customizable margins for ATS scanning
- ✅ Clear section headings
- ✅ Bullet points (no numbered lists)
- ✅ No special characters or symbols
- ✅ Contact information clearly visible
- ✅ Consistent date formatting
- ✅ Print preview shows exact ATS view

## 🎯 Best Practices

### Writing for ATS
1. Use job description keywords naturally in your content
2. Include specific technologies and tools you've used
3. Quantify achievements with numbers (reduced by 40%, built for 5,000+ users)
4. Avoid abbreviations unless they're industry standard
5. Use standard bullet format: Start with action verb + achievement

### Formatting Tips
1. Keep professional summary to 50-75 words
2. Use 3-5 bullet points per experience/project
3. Include dates in consistent format (MMM YYYY – Present)
4. Organize skills by category
5. Don't exceed 1-2 pages for resumes with <5 years experience

## 🚀 Getting Started

1. **Save the HTML file** to your computer
2. **Open index.html** in your web browser (Chrome, Firefox, Safari, or Edge recommended)
3. **Fill in your information** section by section in the left panel
4. **Watch live preview** update on the right as you type
5. **Use Style Controls** to select your preferred font and margins
6. **Save versions** using the "Save History" button for multiple applications
7. **Export your resume** using "Download .Doc" or "PDF Print"
8. **Apply with confidence** knowing your resume is ATS-optimized!

## 📱 Browser Compatibility

Tested and verified on:
- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Microsoft Edge
- ✅ Opera

## 💡 Pro Tips

- **ATS Scanning**: Use print preview (Ctrl+Shift+P) to see exactly how ATS systems will parse your resume
- **Inline Guidance**: Yellow ATS-tip boxes throughout the editor provide specific formatting recommendations
- **Multiple Versions**: Create different versions for each industry (Tech, Finance, etc.) and save in history
- **Keyword Matching**: Review the job description and naturally include those keywords in your content
- **Font Selection**: Arial and Helvetica have the best ATS compatibility; choose based on your preference
- **Margin Adjustment**: Use 0.5"-0.7" margins for optimal spacing without cutting off content
- **Auto-save**: Your draft auto-saves while editing; no need to manually save constantly
- **Data Backup**: Periodically download your resumes to backup locally
- **Test Before Applying**: Download as .doc and open in Word to verify formatting before submission

## 🤝 Common Questions

### How do I save my resume?
There are two types of saving:
- **Auto-save**: Your draft is automatically saved to browser storage while you edit
- **Version History**: Click "Save History" to save a timestamped version for later access

### How do I use multiple resumes?
Click "Save History" to save your current resume with a timestamp. You can then create another version and save it. All versions appear in the "Resume History" panel - click any to load it.

### Which export format should I use?
- Use "Download .Doc" when applying through job portals that accept attachments
- Use "PDF Print" when submitting to email or online forms that specify PDF
- Both formats are fully ATS-optimized

### Will my data be lost if I close the browser?
No! Your current draft auto-saves to your browser's local storage. When you reopen the page, your draft will be restored. Saved history versions are also preserved.

### How do I reset to the default template?
Edit the `resumeData` object in `script.js` and reload the page, or manually delete items from the History panel and start fresh.

### Can I copy my resume to another computer?
Yes! Click "Download .Doc" to get your resume file, then open it in the builder on another computer. Or use your browser's sync features to keep data across devices.

## 📄 Template Contents

The builder comes pre-loaded with sample content from a **Full-stack Developer** profile:

- **Professional Summary**: 2+ years of experience with AI automation focus
- **Technical Skills**: 
  - Languages: JavaScript, TypeScript, SQL, HTML5, CSS3
  - Tools: Node.js, Express, React.js, Next.js, Firebase, PostgreSQL
- **Experience**: Full-stack Developer at Tech Solutions Inc.
  - AI workflow development
  - Backend automation projects
- **Projects**: 
  - Google Productivity Extension with Chrome APIs
  - Google Drive/Sheets API integration
- **Education**: B.Sc. Computer Science (Graduated 2023)
- **Certifications**: Google Cloud, Technical Writing, Open-source contributions

Replace all sample content with your own information!

---

## 📝 Version History

**Current Version**: 1.0  
**Last Updated**: January 2026

### Features by Version
- ✅ **v1.0**: Core features, History/Versions, Font/Margin customization, Download .Doc, Print to PDF, ATS optimization

---

**Designed for job seekers who demand both style and substance.**

*Pass ATS screening, impress hiring managers, land your dream job.* ✨
