# 🚀 ATS Resume Builder - Pro-Resume Engine

An **ATS-optimized resume builder** that creates applicant tracking system (ATS) compliant resumes. This tool ensures your resume passes through automated screening while maintaining professional formatting and readability.

## ✨ Features

### 📝 ATS Optimization
- **Strict 1-column layout** - No multi-column designs that confuse ATS parsers
- **Minimal graphics & icons** - Icons hidden during printing to prevent parsing errors
- **ATS-friendly fonts** - Uses Arial/Helvetica for maximum compatibility
- **Optimized spacing** - Proper margins and line-height for ATS scanning
- **No complex formatting** - Avoids tables, images, and fancy styling that break ATS parsing

### 🎨 Live Editor & Preview
- **Real-time preview** - See changes instantly as you type
- **Split-view interface** - Edit on the left, preview on the right
- **Dynamic content management** - Add/remove experiences, projects, skills, and education
- **Professional templates** - Pre-filled sections ready for customization

### 📄 Export Options
- **Word Document (.doc)** - Download as Microsoft Word compliant document
- **Print to PDF** - Browser-native print functionality preserves formatting

### 🎯 Resume Sections
- **Personal Info** - Name, job title, email, phone, social links
- **Professional Summary** - 2-3 line executive overview with years of experience
- **Technical Skills** - Categorized skills (Languages, Tools, Cloud & Deployment)
- **Professional Experience** - Job titles, companies, dates, and achievement bullets
- **Projects** - Showcase key portfolio projects with dates and results
- **Education** - Degree, institution, graduation year
- **Certifications & Achievements** - Awards, certifications, and recognition

## 🔧 How to Use

1. **Open the file** - `index.html` in any web browser
2. **Edit left panel** - Fill in your information section by section
3. **Live preview updates** - Watch your resume update in real-time on the right
4. **Download resume** - Click "Download as Word" or "Print to PDF"

### Quick Tips
- ✅ Match your job title exactly to the position you're applying for
- ✅ Include 2-3 lines in your professional summary with years of experience
- ✅ Use action verbs and quantifiable results in bullet points
- ✅ Include relevant keywords from the job description naturally
- ✅ Keep technical skills organized by category
- ✅ Use standard bullet points for maximum compatibility

## 📋 Data Structure

The application uses a centralized data model (`resumeData`) that manages all resume content:

```javascript
{
  personal: { name, role, email, phone, links },
  summary: "Professional overview",
  skills: [{ label, items }],
  experience: [{ title, company, dates, bullets }],
  projects: [{ title, dates, bullets }],
  education: [{ deg, uni, year }],
  additional: "Certifications text"
}
```

## 🎨 Customization

### Styling
- **Editor UI**: Tailwind CSS for modern interface design
- **Resume output**: Print-optimized CSS with ATS compliance
- **Custom scrollbar**: Styled scrollbar for editor sidebar
- **Responsive design**: Adapts to different screen sizes

### Fonts
- **Interface**: Inter font family for modern look
- **Resume**: Arial/Helvetica for ATS compatibility
- **Print mode**: Strict font override to Arial for maximum compatibility

## ⚙️ Technical Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - No dependencies required
- **Google Fonts** - Material Symbols & Inter typeface

## 📥 Exports

### Word Document
- Generates `.doc` files with Office-compatible HTML
- Includes ATS-optimized formatting
- Preserves all content and structure

### HTML Source
- Complete backup of your work
- Fully self-contained (no external dependencies needed)
- Can be reopened and edited anytime

### PDF (Browser Print)
- Use browser's Print function (Ctrl+P / Cmd+P)
- Select "Save as PDF"
- Maintains ATS compliance

## 🔒 Data Privacy
- **100% Client-side processing** - All data stays in your browser
- **No server uploads** - No data collection or tracking
- **Local storage option** - Save/refresh without losing data
- **Standalone file** - Works offline without internet

## ⚠️ ATS Compliance Checklist

- ✅ Single column layout
- ✅ No tables or complex formatting
- ✅ No graphics or images in resume content
- ✅ Standard fonts (Arial, Helvetica)
- ✅ Proper spacing and margins
- ✅ Clear section headings
- ✅ Bullet points over numbered lists
- ✅ No special characters or symbols
- ✅ Contact information clearly visible
- ✅ Consistent date formatting

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

1. Save the HTML file to your computer
2. Open it in Chrome, Firefox, Safari, or Edge
3. Start editing your information
4. Use the "Download as Word" button when complete
5. Apply with confidence!

## 📱 Browser Compatibility

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 💡 Pro Tips

- Print preview (Ctrl+Shift+P) shows exactly how ATS will see your resume
- Inline ATS tips appear in yellow boxes to guide you
- Your data persists while the page is open
- Download frequently as backup
- Test your resume on online ATS simulators

## 🤝 Common Issues

### Resume not updating?
- Check browser console for errors
- Try refreshing the page
- Ensure JavaScript is enabled

### Export formatting looks wrong?
- Use "Download as Word" for best results
- Check ATS-tip boxes for specific formatting guidelines
- Avoid pasting special characters from other programs

### Looking for more features?
- Reset to default template using "Reset Data" button
- Consider using multiple versions for different industries

## 📄 Example Content Included

The builder comes with sample content from a Full-stack Developer profile, including:
- Professional summary with AI/automation focus
- Technical skills across multiple categories
- Real-world project examples
- Achievement-focused bullet points
- ATS-optimized formatting throughout

---

**Created for modern job seekers who demand both style and substance.**

*Make your resume stand out to humans, not just machines.* ✨
