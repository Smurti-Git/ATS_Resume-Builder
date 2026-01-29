 /**
         * INITIAL DATA STATE
         */
        let resumeData = {
            meta: { font: 'font-arial', margin: 0.6 },
          personal: {
    name: "YOUR FULL NAME",
    role: "Full-stack Developer",
    email: "email@example.com",
    phone: "+91-XXXXXXXXXX",
    location: "City, Country", // Add this line
    links: "LinkedIn | GitHub | Portfolio"
},
            summary: "Highly motivated Full-stack Developer with 2+ years of experience building scalable web applications and Artificial Intelligence (AI) automation. Proven track record in delivering user-centric SaaS platforms and Chrome Extensions.",
            skills: [
                { label: 'Languages', items: 'JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3' },
                { label: 'Technical Tools', items: 'Node.js, Express, React.js, Next.js, Firebase, PostgreSQL' }
            ],
            experience: [
                {
                    title: "Full-stack Developer",
                    company: "Tech Solutions Inc.",
                    dates: "Jan 2023 – Present",
                    bullets: "Developed Artificial Intelligence (AI) workflows reducing manual grading time by 40%.\nAutomated backend certification tracking using SQL and Node.js, improving system reliability by 25%."
                }
            ],
            projects: [
                {
                    title: "Google Productivity Extension",
                    dates: "Jun 2024 – Aug 2024",
                    bullets: "Built Chrome Extension to centralize classroom resources using JavaScript and Chrome APIs.\nIntegrated Google Drive API and Google Sheets API for real-time data management."
                }
            ],
            education: [
                { deg: 'B.Sc. Computer Science', uni: 'University of Technology', year: 'Graduated: 2023' }
            ],
            additional: "• Google Cloud Foundations Certified\n• Technical Writer: Published 10+ articles on Instructional Design and Automation\n• Contributor: Open-source GitHub projects for web performance"
        };

        let historyStore = [];

        /**
         * CORE FUNCTIONS
         */
       function init() {
    // 1. Load the history list from LocalStorage
    const savedHistory = localStorage.getItem('resumeHistory');
    if (savedHistory) {
        historyStore = JSON.parse(savedHistory);
    }

    // 2. (Optional) Load the last active resume draft so you don't lose progress
    const savedDraft = localStorage.getItem('currentResumeDraft');
    if (savedDraft) {
        resumeData = JSON.parse(savedDraft);
        // Sync the style dropdowns to match the saved draft
        document.getElementById('font-select').value = resumeData.meta.font;
        document.getElementById('margin-select').value = resumeData.meta.margin;
    }

    renderAll();
    updateHistoryUI();
}

        function renderAll() {
            renderEditor();
            renderResume();
        }

        function renderEditor() {
            const container = document.getElementById('editor-container');
            container.innerHTML = `
            <!-- PERSONAL CONTACTS -->
           <div class="editor-card">
    <h3 class="flex items-center gap-2 font-bold text-slate-700 text-sm mb-4 border-b pb-2">PERSONAL CONTACTS</h3>
    <div class="ats-tip-box">Tip: Ensure your job title matches the Job Description exactly.</div>
    <div class="space-y-3">
        <div class="input-group"><label>Full Name</label><input type="text" value="${resumeData.personal.name}" oninput="updateProp('personal', 'name', this.value)"></div>
        <div class="input-group"><label>Job Title</label><input type="text" value="${resumeData.personal.role}" oninput="updateProp('personal', 'role', this.value)"></div>
        <div class="grid grid-cols-3 gap-2"> <!-- Change from grid-cols-2 to grid-cols-3 -->
            <div class="input-group"><label>Email</label><input type="text" value="${resumeData.personal.email}" oninput="updateProp('personal', 'email', this.value)"></div>
            <div class="input-group"><label>Phone</label><input type="text" value="${resumeData.personal.phone}" oninput="updateProp('personal', 'phone', this.value)"></div>
            <div class="input-group"><label>Location</label><input type="text" value="${resumeData.personal.location || ''}" oninput="updateProp('personal', 'location', this.value)"></div>
        </div>
        <div class="input-group"><label>Social Links</label><input type="text" value="${resumeData.personal.links}" oninput="updateProp('personal', 'links', this.value)"></div>
    </div>
</div>


            <!-- PROFESSIONAL SUMMARY -->
            <div class="editor-card">
                <h3 class="flex items-center gap-2 font-bold text-slate-700 text-sm mb-4 border-b pb-2">PROFESSIONAL SUMMARY</h3>
                <div class="ats-tip-box">Tip: 2-3 lines. Include years of experience and core technologies.</div>
                <textarea class="h-24" oninput="updateProp(null, 'summary', this.value)">${resumeData.summary}</textarea>
            </div>

            <!-- TECHNICAL SKILLS -->
            <div class="editor-card">
                <h3 class="flex items-center gap-2 font-bold text-slate-700 text-sm mb-4 border-b pb-2">TECHNICAL SKILLS</h3>
                <div class="ats-tip-box">Tip: Use exact industry keywords found in the job posting.</div>
                <div class="space-y-4">
                    ${resumeData.skills.map((s, i) => `
                        <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg relative">
                            <span class="material-symbols-outlined btn-remove absolute top-2 right-2 text-xs" onclick="removeArrayItem(null, 'skills', ${i})">delete</span>
                            <div class="input-group mb-2"><label>Category Name</label><input type="text" value="${s.label}" oninput="updateArray(null, 'skills', ${i}, 'label', this.value)"></div>
                            <div class="input-group"><label>Skills / Keywords</label><input type="text" value="${s.items}" oninput="updateArray(null, 'skills', ${i}, 'items', this.value)"></div>
                        </div>
                    `).join('')}
                    <div class="btn-add" onclick="addItem(null, 'skills', {label:'', items:''})">+ Add Skill Category</div>
                </div>
            </div>

            <!-- PROFESSIONAL EXPERIENCE -->
            <div class="editor-card">
                <h3 class="flex items-center gap-2 font-bold text-slate-700 text-sm mb-4 border-b pb-2">EXPERIENCE</h3>
                <div class="ats-tip-box">Tip: Start points with action verbs. Quantify with percentages/numbers.</div>
                <div class="space-y-4">
                    ${resumeData.experience.map((e, i) => `
                        <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg relative">
                            <span class="material-symbols-outlined btn-remove absolute top-2 right-2 text-xs" onclick="removeArrayItem(null, 'experience', ${i})">delete</span>
                            <div class="input-group mb-1"><label>Job Title</label><input type="text" value="${e.title}" oninput="updateArray(null, 'experience', ${i}, 'title', this.value)"></div>
                            <div class="input-group mb-1"><label>Company</label><input type="text" value="${e.company}" oninput="updateArray(null, 'experience', ${i}, 'company', this.value)"></div>
                            <div class="input-group mb-1"><label>Dates</label><input type="text" value="${e.dates}" oninput="updateArray(null, 'experience', ${i}, 'dates', this.value)"></div>
                            <div class="input-group"><label>Impact Bullets (One per line)</label><textarea class="h-28" oninput="updateArray(null, 'experience', ${i}, 'bullets', this.value)">${e.bullets}</textarea></div>
                        </div>
                    `).join('')}
                    <div class="btn-add" onclick="addItem(null, 'experience', {title:'', company:'', dates:'', bullets:''})">+ Add Experience</div>
                </div>
            </div>

            <!-- PROJECTS -->
            <div class="editor-card">
                <h3 class="flex items-center gap-2 font-bold text-slate-700 text-sm mb-4 border-b pb-2">PROJECTS</h3>
                <div class="ats-tip-box">Tip: Crucial for early career. Highlight technical tools used.</div>
                <div class="space-y-4">
                    ${resumeData.projects.map((p, i) => `
                        <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg relative">
                            <span class="material-symbols-outlined btn-remove absolute top-2 right-2 text-xs" onclick="removeArrayItem(null, 'projects', ${i})">delete</span>
                            <div class="input-group mb-1"><label>Project Title</label><input type="text" value="${p.title}" oninput="updateArray(null, 'projects', ${i}, 'title', this.value)"></div>
                            <div class="input-group mb-1"><label>Dates</label><input type="text" value="${p.dates}" oninput="updateArray(null, 'projects', ${i}, 'dates', this.value)"></div>
                            <div class="input-group"><label>Key Impact Points (One per line)</label><textarea class="h-28" oninput="updateArray(null, 'projects', ${i}, 'bullets', this.value)">${p.bullets}</textarea></div>
                        </div>
                    `).join('')}
                    <div class="btn-add" onclick="addItem(null, 'projects', {title:'', dates:'', bullets:''})">+ Add Project</div>
                </div>
            </div>

            <!-- EDUCATION -->
            <div class="editor-card">
                <h3 class="flex items-center gap-2 font-bold text-slate-700 text-sm mb-4 border-b pb-2">EDUCATION</h3>
                <div class="space-y-4">
                    ${resumeData.education.map((e, i) => `
                        <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg relative">
                            <span class="material-symbols-outlined btn-remove absolute top-2 right-2 text-xs" onclick="removeArrayItem(null, 'education', ${i})">delete</span>
                            <div class="input-group mb-1"><label>Degree</label><input type="text" value="${e.deg}" oninput="updateArray(null, 'education', ${i}, 'deg', this.value)"></div>
                            <div class="input-group mb-1"><label>University / School</label><input type="text" value="${e.uni}" oninput="updateArray(null, 'education', ${i}, 'uni', this.value)"></div>
                            <div class="input-group mb-1"><label>Year</label><input type="text" value="${e.year}" oninput="updateArray(null, 'education', ${i}, 'year', this.value)"></div>
                        </div>
                    `).join('')}
                    <div class="btn-add" onclick="addItem(null, 'education', {deg:'', uni:'', year:''})">+ Add Education</div>
                </div>
            </div>

            <!-- ADDITIONAL -->
            <div class="editor-card">
                <h3 class="flex items-center gap-2 font-bold text-slate-700 text-sm mb-4 border-b pb-2">CERTIFICATIONS & ACHIEVEMENTS</h3>
                <textarea class="h-32" oninput="updateProp(null, 'additional', this.value)">${resumeData.additional}</textarea>
            </div>
        `;
        }

        function renderResume() {
            const sheet = document.getElementById('resume-sheet');
            sheet.className = `resume-sheet ${resumeData.meta.font}`;
            sheet.style.padding = `${resumeData.meta.margin}in`;
            document.body.style.setProperty('--print-padding', `${resumeData.meta.margin}in`);

            sheet.innerHTML = `
          
            <header style="text-align: center; margin-bottom: 20pt;">
    <h1 style="font-size: 24pt; font-weight: bold; margin-bottom: 4pt; color: #111; line-height: 1.1;">${resumeData.personal.name}</h1>
    <p style="font-size: 14pt; font-weight: bold; color: #111; margin-bottom: 6pt;">${resumeData.personal.role}</p>
    <p style="font-size: 10pt; color: #333; margin-bottom: 2pt;">
        ${resumeData.personal.email} | ${resumeData.personal.phone} | ${resumeData.personal.location}
    </p>
    <p style="font-size: 10pt; color: #333;">
        ${resumeData.personal.links}
    </p>
</header>

            <section>
                <h2 class="section-heading">Professional Summary</h2>
                <p style="font-size: 10.5pt; color: #111; line-height: 1.4; text-align: justify;">${resumeData.summary}</p>
            </section>

            <section>
                <h2 class="section-heading">Technical Skills</h2>
                <div style="font-size: 10.5pt; line-height: 1.5;">
                    ${resumeData.skills.map(s => `
                        <p style="margin: 2pt 0;"><strong>${s.label}:</strong> ${s.items}</p>
                    `).join('')}
                </div>
            </section>

            <section>
                <h2 class="section-heading">Experience</h2>
                ${resumeData.experience.map(e => `
                    <div style="margin-bottom: 12pt;">
                        <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 11pt;">
                            <span>${e.title}</span>
                            <span>${e.dates}</span>
                        </div>
                        <div style="font-style: italic; font-size: 10.5pt; color: #444; margin-bottom: 3pt;">${e.company}</div>
                        <ul style="list-style-type: disc; margin-left: 20pt; font-size: 10.5pt; line-height: 1.4;">
                            ${e.bullets.split('\n').filter(l => l.trim()).map(line => `<li>${line.replace(/^[•*-]\s*/, "")}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </section>

            <section>
                <h2 class="section-heading">Projects</h2>
                ${resumeData.projects.map(p => `
                    <div style="margin-bottom: 10pt;">
                        <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 11pt;">
                            <span>${p.title}</span>
                            <span>${p.dates}</span>
                        </div>
                        <ul style="list-style-type: disc; margin-left: 20pt; font-size: 10.5pt; line-height: 1.4; margin-top: 2pt;">
                            ${p.bullets.split('\n').filter(l => l.trim()).map(line => `<li>${line.replace(/^[•*-]\s*/, "")}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </section>

            <section>
                <h2 class="section-heading">Education</h2>
                ${resumeData.education.map(e => `
                    <div style="display: flex; justify-content: space-between; font-size: 10.5pt; margin-bottom: 8pt;">
                        <div>
                            <strong>${e.deg}</strong><br>
                            ${e.uni}
                        </div>
                        <div style="font-weight: bold;">${e.year}</div>
                    </div>
                `).join('')}
            </section>

            <section>
                <h2 class="section-heading">Certifications & Achievements</h2>
                <ul style="list-style-type: disc; margin-left: 20pt; font-size: 10.5pt; line-height: 1.4;">
                    ${resumeData.additional.split('\n').filter(l => l.trim()).map(line => `<li>${line.replace(/^[•*-]\s*/, "")}</li>`).join('')}
                </ul>
            </section>
        `;
        }

        /**
         * STATE HELPERS
         */
        function updateProp(parent, key, value) {
    if (parent) resumeData[parent][key] = value;
    else resumeData[key] = value;
    renderResume();
    // Autosave current draft
    localStorage.setItem('currentResumeDraft', JSON.stringify(resumeData));
}

function updateArray(parent, key, index, field, value) {
    if (parent) resumeData[parent][key][index][field] = value;
    else resumeData[key][index][field] = value;
    renderResume();
    // Autosave current draft
    localStorage.setItem('currentResumeDraft', JSON.stringify(resumeData));
}

        function addItem(parent, key, template) {
            if (parent) resumeData[parent][key].push({ ...template });
            else resumeData[key].push({ ...template });
            renderAll();
        }

        function removeArrayItem(parent, key, index) {
            if (parent) resumeData[parent][key].splice(index, 1);
            else resumeData[key].splice(index, 1);
            renderAll();
        }

        function updateStyle() {
            resumeData.meta.font = document.getElementById('font-select').value;
            resumeData.meta.margin = parseFloat(document.getElementById('margin-select').value);
            renderResume();
        }

        /**
         * HISTORY SYSTEM
         */
        function saveToHistory() {
    const entry = {
        id: Date.now(),
        name: resumeData.personal.name || "Untitled",
        role: resumeData.personal.role,
        timestamp: new Date().toLocaleString(),
        data: JSON.parse(JSON.stringify(resumeData))
    };
    historyStore.unshift(entry);
    
    // Save to LocalStorage
    localStorage.setItem('resumeHistory', JSON.stringify(historyStore));
    
    updateHistoryUI();
    
}

      function deleteHistory(id, event) {
    event.stopPropagation();
    historyStore = historyStore.filter(h => h.id !== id);
    
    // Update LocalStorage after deletion
    localStorage.setItem('resumeHistory', JSON.stringify(historyStore));
    
    updateHistoryUI();
}

        function loadHistory(id) {
            const entry = historyStore.find(h => h.id === id);
            if (entry) {
                resumeData = JSON.parse(JSON.stringify(entry.data));
                document.getElementById('font-select').value = resumeData.meta.font;
                document.getElementById('margin-select').value = resumeData.meta.margin;
                renderAll();
            }
        }

        function updateHistoryUI() {
            const list = document.getElementById('history-list');
            if (historyStore.length === 0) {
                list.innerHTML = `<p class="text-xs text-slate-400 italic text-center py-2">No history yet.</p>`;
                return;
            }
            list.innerHTML = historyStore.map(h => `
            <div class="history-item flex justify-between items-center p-3 rounded-lg border border-indigo-100 bg-white shadow-sm" onclick="loadHistory(${h.id})">
                <div class="flex flex-col">
                    <span class="text-[10px] font-black text-indigo-900 leading-none truncate w-32">${h.name.toUpperCase()}</span>
                    <span class="text-[9px] text-slate-400 mt-1">${h.timestamp}</span>
                </div>
                <button class="text-red-400 hover:text-red-600 p-1" onclick="deleteHistory(${h.id}, event)">
                    <span class="material-symbols-outlined text-sm">delete</span>
                </button>
            </div>
        `).join('');
        }

     

        document.getElementById('download-word').addEventListener('click', function () {
            const resumeHTML = document.getElementById('resume-sheet').innerHTML;
            const fonts = {
                'font-arial': 'Arial, sans-serif',
                'font-calibri': 'Calibri, sans-serif',
                'font-helvetica': 'Helvetica, sans-serif',
                'font-verdana': 'Verdana, sans-serif',
                'font-times': 'Times New Roman, serif',
                'font-georgia': 'Georgia, serif'
            };
            const currentFont = fonts[resumeData.meta.font];
            const currentMargin = resumeData.meta.margin;

            const docHeader = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head><meta charset='utf-8'><title>ATS Resume</title>
            <style>
                body { font-family: ${currentFont}; font-size: 11pt; line-height: 1.3; padding: ${currentMargin}in; }
                h1 { font-size: 24pt; text-align: center; text-transform: uppercase; font-weight: bold; margin-bottom: 2pt; }
                header p { text-align: center; margin-bottom: 15pt; }
                .section-heading { border-bottom: 2px solid #000; text-transform: uppercase; font-weight: bold; font-size: 12pt; margin-top: 15pt; margin-bottom: 8pt; border-bottom-width: 2px; }
                ul { margin-left: 20pt; }
                li { margin-bottom: 4pt; }
                p { text-align: justify; margin-bottom: 6pt; }
                strong { font-weight: bold; }
                .flex { display: flex; justify-content: space-between; }
            </style>
            </head><body>
        `;
            const blob = new Blob(['\ufeff', docHeader + resumeHTML + "</body></html>"], { type: 'application/msword' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `ATS_Resume_${resumeData.personal.name.replace(/\s+/g, '_')}.doc`;
            link.click();
        });

        window.onload = init;