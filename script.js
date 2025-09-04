// Full project injection with all categories and filter buttons
const projects = [
    // B2C Medical
    { title: "What’s Included on a Nursing Report Sheet?", category: "B2C Medical", summary: "", link: "https://rayanabarneswrites.com/whats-included-on-a-nursing-report-sheet/" },
    { title: "How to Create a Basic Nursing Concept Map", category: "B2C Medical", summary: "", link: "https://rayanabarneswrites.com/how-to-create-a-basic-nursing-concept-map/" },
    { title: "Where to Find Pulse Points on Your Patients", category: "B2C Medical", summary: "", link: "https://rayanabarneswrites.com/where-to-find-pulse-points-on-your-patients/" },
    { title: "Nursing Care Plan for Coronary Artery Disease (CAD)", category: "B2C Medical", summary: "", link: "https://rayanabarneswrites.com/nursing-care-plan-for-coronary-artery-disease-cad/" },
    { title: "An NCLEX Cram Sheet to Help You Pass the Exam", category: "B2C Medical", summary: "", link: "https://rayanabarneswrites.com/nclex-cram-sheet/" },
    { title: "Travel Nurses Get the Best Salaries in These U.S. States", category: "B2C Medical", summary: "", link: "https://rayanabarneswrites.com/travel-nurses-get-the-best-salaries-in-these-us-states/" },
    { title: "19 NCLEX Tips to Help Ace The Exam (and Avoid Retaking It)", category: "B2C Medical", summary: "", link: "https://rayanabarneswrites.com/19-nclex-tips-to-help-ace-the-exam/" },
    { title: "What to Do If You Fail the NCLEX and Signs to Look Out For", category: "B2C Medical", summary: "", link: "https://rayanabarneswrites.com/what-to-do-if-you-fail-the-nclex/" },
    { title: "Nursing Care Plan for COPD", category: "B2C Medical", summary: "", link: "https://rayanabarneswrites.com/nursing-care-plan-for-copd/" },

    // B2B Fintech
    { title: "How CPA Firms Can Navigate Remote Staffing Challenges", category: "B2B Fintech", summary: "", link: "https://njcpa.org/stayinformed/news/njcpamag/issues/summer-2022" },
    { title: "Does BNPL Actually Help Your Customers? Why This Payment Solution Is so Popular", category: "B2B Fintech", summary: "", link: "http://web.archive.org/web/20220706232159/https://quickfee.com/blog/how-bnpl-helps-customers/" },
    { title: "Using QR Codes Payments to Get Your Business More Money", category: "B2B Fintech", summary: "", link: "https://quickfee.com/blog/qr-code-for-payments-b2b/" },
    { title: "7 Payment Industry Trends in 2022 That Could Impact ISOs", category: "B2B Fintech", summary: "", link: "https://quickfee.com/blog/7-payment-trends-2022/" },
    { title: "The Hidden Costs of Accepting Checks for Payment vs Online Billing", category: "B2B Fintech", summary: "", link: "https://quickfee.com/blog/hidden-costs-of-accepting-checks/" },
    { title: "How to Offer Finance Options to Customers Beyond Traditional Financing", category: "B2B Fintech", summary: "", link: "http://web.archive.org/web/20220706213033/https://quickfee.com/blog/how-to-offer-finance-options-to-customers/" },

    // B2B SaaS
    { title: "Map Your Sales Funnel for a Smoother Sales Journey", category: "B2B SaaS", summary: "", link: "http://web.archive.org/web/20210303181909/https://blog.zoominfo.com/sales-funnel-mapping/" },
    { title: "How to Create a Lead Generation Strategy for SMBs", category: "B2B SaaS", summary: "", link: "https://pipeline.zoominfo.com/sales/small-business-lead-generation" },
    { title: "Get the Most Out of Customer Intelligence for Better Insights", category: "B2B SaaS", summary: "", link: "https://pipeline.zoominfo.com/marketing/customer-intelligence-strategy" },
    { title: "Enterprise CRM’s Future is in Company Growth", category: "B2B SaaS", summary: "", link: "https://pipeline.zoominfo.com/marketing/enterprise-crm" },
    { title: "The Relationship Intelligence Guide to Build Customer Opportunities", category: "B2B SaaS", summary: "", link: "https://pipeline.zoominfo.com/marketing/relationship-intelligence-data" },
    { title: "The Future of CRM — 7 Trends to Consider for Sales and Marketing Teams", category: "B2B SaaS", summary: "", link: "https://pipeline.zoominfo.com/marketing/future-crm-trends" },
    { title: "40 Marketing KPIs Your Team Needs to Track", category: "B2B SaaS", summary: "", link: "https://web.archive.org/web/20210305170902/https://blog.zoominfo.com/marketing-kpis/" },
    { title: "Cold Calling Guidelines for Practical and Actionable Prospecting", category: "B2B SaaS", summary: "", link: "https://pipeline.zoominfo.com/sales/cold-calling-guidelines" },
    { title: "How to Calculate Your Customer Lifetime Value (CLV) for Revenue Success", category: "B2B SaaS", summary: "", link: "https://pipeline.zoominfo.com/marketing/customer-lifetime-value" },
    { title: "“Land” Your Best Prospects with Landing Page Marketing", category: "B2B SaaS", summary: "", link: "https://pipeline.zoominfo.com/marketing/landing-page-marketing" },
    { title: "Digging Into Customer Churn Data: A Guide to Better Retention", category: "B2B SaaS", summary: "", link: "https://pipeline.zoominfo.com/marketing/customer-churn-data" },
    { title: "How to Use Email Automation to Nurture Prospects", category: "B2B SaaS", summary: "", link: "https://pipeline.zoominfo.com/marketing/nurture-email-automation" },
    { title: "How To Build Your Go‑To‑Market Strategy", category: "B2B SaaS", summary: "", link: "https://pipeline.zoominfo.com/marketing/how-to-build-gtm-strategy" },

    // Technographics
    { title: "Data Loss Examples and Data Recovery Tips for World Backup Day 2020", category: "Technographics", summary: "", link: "https://web.archive.org/web/20200808154348/https://resources.datanyze.com/blog/data-recovery-tips-for-backup" },
    { title: "5 Presentation Software Tips for Effective Visual Creation", category: "Technographics", summary: "", link: "https://web.archive.org/web/20200808155143/https://resources.datanyze.com/blog/best-presentation-software-tips" },
    { title: "9 Best B2B Apps for Faster Mobile Payment Processing in 2020", category: "Technographics", summary: "", link: "https://web.archive.org/web/20200808153157/https://resources.datanyze.com/blog/best-b2b-mobile-payment-apps" },

    // Local Business
    { title: "How to Choose the Right Sunroom for Your Family", category: "Local Business", summary: "", link: "https://globalsolariums.com/news/how-to-choose-the-right-sunroom-for-your-family/" },
    { title: "8 Reasons People Love Sunrooms So Much", category: "Local Business", summary: "", link: "https://globalsolariums.com/news/8-reasons-people-love-sunrooms-so-much/" },
    { title: "Wintertime Safety Tips to Beat the Cold", category: "Local Business", summary: "", link: "https://koprc.com/blog/wintertime-safety-tips-to-beat-the-cold/" },
    { title: "20 New Years Goals and Resolutions to Set for Active Seniors", category: "Local Business", summary: "", link: "https://koprc.com/blog/20-new-years-goals-and-resolutions-to-set-for-active-seniors/" },
    { title: "Family‑Fun Local Holiday Activities to Enjoy in the Vancouver Area", category: "Local Business", summary: "", link: "https://koprc.com/blog/family-fun-local-holiday-activities-to-enjoy-in-the-vancouver-area/" },
    { title: "The Certified Nursing Assistant Role and CNA Duties & Responsibilities", category: "Local Business", summary: "", link: "https://nwnactraining.com/the-certified-nursing-assistant-role-and-cna-duties-and-responsibilities/" },
    { title: "A Guide to Washington State CNA Training and Testing", category: "Local Business", summary: "", link: "https://nwnactraining.com/a-guide-to-washington-state-cna-training-and-testing/" },
    { title: "NAC Classes Required for CNA Certification in Vancouver, WA", category: "Local Business", summary: "", link: "https://nwnactraining.com/nac-classes-required-for-cna-certification-in-vancouver-wa/" },
    { title: "Why You Need Fluoride Treatment from a Dentist", category: "Local Business", summary: "", link: "https://islandfamdental.com/blog/why-you-need-fluoride-treatment-from-a-dentist/" },
];

const projectGrid = document.querySelector(".project-grid");
const filterContainer = document.createElement("div");
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const scrollBtn = document.getElementById('scrollToTop');
filterContainer.className = "filter-buttons";

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const categories = ["All", ...new Set(projects.map(p => p.category))];
categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.setAttribute("data-category", cat);
    btn.className = "btn-primary";
    filterContainer.appendChild(btn);
});
projectGrid.parentElement.insertBefore(filterContainer, projectGrid);

function renderProjects(category = "All") {
    projectGrid.innerHTML = "";
    projects
        .filter(p => category === "All" || p.category === category)
        .forEach(p => {
            const card = document.createElement("div");
            card.classList.add("project-card");
            card.setAttribute("data-category", p.category); // ✅ Add this line
            card.innerHTML = `
                <h3>${p.title}</h3>
                <span class="category-badge">${p.category}</span>
                <p>${p.summary}</p>
                <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="view-project-btn">View Project</a>`;
            projectGrid.appendChild(card);
        });
}

renderProjects();

document.querySelectorAll(".filter-buttons button").forEach(btn => {
    btn.addEventListener("click", () => {
        // update active state
        document.querySelector(".filter-buttons .active")?.classList.remove("active");
        btn.classList.add("active");

        // render filtered projects
        const selectedCategory = btn.getAttribute("data-category");
        renderProjects(selectedCategory);
    });
});

document.querySelectorAll(".filter-buttons button").forEach(btn => {
    btn.addEventListener("click", () => {
        renderProjects(btn.getAttribute("data-category"));
    });
});

