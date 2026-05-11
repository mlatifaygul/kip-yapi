// Admin Panel Data Management System
// This file handles all CRUD operations for the admin panel

// Initialize localStorage with default data if empty
function initializeData() {
    if (!localStorage.getItem('ipek_navigation')) {
        const defaultNavigation = [
            {
                id: 1,
                name: 'Ana Sayfa',
                url: 'index.html',
                order: 1,
                active: true,
                subItems: []
            },
            {
                id: 2,
                name: 'Biz Kimiz',
                url: 'biz-kimiz.html',
                order: 2,
                active: true,
                subItems: [
                    { id: 21, name: 'BİZ KİMİZ', url: 'biz-kimiz.html' },
                    { id: 22, name: 'Manifesto', url: 'biz-kimiz.html#manifesto' },
                    { id: 23, name: 'Tarihçe', url: 'biz-kimiz.html#tarihce' }
                ]
            },
            {
                id: 3,
                name: 'Projeler',
                url: 'projeler.html',
                order: 3,
                active: true,
                subItems: [
                    { id: 31, name: 'İpek Reserve', url: 'projeler.html' },
                    { id: 32, name: 'İpek Projeler', url: 'projeler.html' },
                    { id: 33, name: 'İpek Arsa', url: 'projeler.html' },
                    { id: 34, name: 'İpek Global', url: 'projeler.html' },
                    { id: 35, name: 'NOVU', url: 'projeler.html' },
                    { id: 36, name: 'Tümünü Gör', url: 'projeler.html' }
                ]
            },
            {
                id: 4,
                name: 'İpek Keşifleri',
                url: 'ipek-kesifleri.html',
                order: 4,
                active: true,
                subItems: []
            },
            {
                id: 5,
                name: 'İletişim',
                url: 'iletisim.html',
                order: 5,
                active: true,
                subItems: []
            }
        ];
        localStorage.setItem('ipek_navigation', JSON.stringify(defaultNavigation));
    }

    if (!localStorage.getItem('ipek_pages')) {
        const defaultPages = [
            {
                title: 'Ana Sayfa',
                file: 'index.html',
                description: 'İPEK - İnce Düşünülmüş Yaşam Alanları',
                content: '',
                active: true,
                updated: '2024-05-10'
            },
            {
                title: 'Biz Kimiz',
                file: 'biz-kimiz.html',
                description: 'İPEK Hakkımızda Sayfası',
                content: '',
                active: true,
                updated: '2024-05-10'
            },
            {
                title: 'Projeler',
                file: 'projeler.html',
                description: 'İPEK Projeleri Sayfası',
                content: '',
                active: true,
                updated: '2024-05-10'
            },
            {
                title: 'İpek Keşifleri',
                file: 'ipek-kesifleri.html',
                description: 'İPEK Keşifleri Sayfası',
                content: '',
                active: true,
                updated: '2024-05-10'
            },
            {
                title: 'İletişim',
                file: 'iletisim.html',
                description: 'İPEK İletişim Sayfası',
                content: '',
                active: true,
                updated: '2024-05-10'
            }
        ];
        localStorage.setItem('ipek_pages', JSON.stringify(defaultPages));
    }

    if (!localStorage.getItem('ipek_projects')) {
        const defaultProjects = [
            {
                id: 1,
                name: 'İpek Sapanca',
                category: 'konut',
                location: 'Sapanca, Kocaeli',
                status: 'Yaşam Başladı',
                description: 'Sapanca\'ya Şimdi İpek\'den Bakın',
                image: 'https://via.placeholder.com/400x250/34495e/ffffff?text=İpek+Sapanca'
            },
            {
                id: 2,
                name: 'İpek Meram',
                category: 'konut',
                location: 'Meram, Konya',
                status: 'İnşaat Devam Ediyor',
                description: 'Trakya\'nın yıldızı parlıyor',
                image: 'https://via.placeholder.com/400x250/34495e/ffffff?text=İpek+Meram'
            },
            {
                id: 3,
                name: 'İpek Reserve',
                category: 'konut',
                location: 'Bodrum, Muğla',
                status: 'Yaşam Başladı',
                description: 'Premium yaşam alanları',
                image: 'https://via.placeholder.com/400x250/34495e/ffffff?text=İpek+Reserve'
            },
            {
                id: 4,
                name: 'İpek Arsa Kaz Dağları',
                category: 'arsa',
                location: 'Kaz Dağları, Çanakkale',
                status: 'Satışta',
                description: 'Kaz Dağları\'nın Havası Yaşamınızın Bir Parçası Olsun',
                image: 'https://via.placeholder.com/400x250/34495e/ffffff?text=İpek+Arsa+Kaz+Dağları'
            },
            {
                id: 5,
                name: 'İpek Arsa Dikili',
                category: 'arsa',
                location: 'Dikili, İzmir',
                status: 'Satışta',
                description: 'Ege\'nin incisinde mükemmel bir yatırım',
                image: 'https://via.placeholder.com/400x250/34495e/ffffff?text=İpek+Arsa+Dikili'
            },
            {
                id: 6,
                name: 'İpek Arsa Lüleburgaz',
                category: 'arsa',
                location: 'Lüleburgaz, Kırklareli',
                status: 'Satışta',
                description: 'Trakya\'nın yıldızı parlıyor',
                image: 'https://via.placeholder.com/400x250/34495e/ffffff?text=İpek+Arsa+Lüleburgaz'
            }
        ];
        localStorage.setItem('ipek_projects', JSON.stringify(defaultProjects));
    }

    if (!localStorage.getItem('ipek_images')) {
        const defaultImages = [
            {
                id: 1,
                name: 'hero-image.jpg',
                url: 'https://via.placeholder.com/800x400/34495e/ffffff?text=Hero+Image'
            },
            {
                id: 2,
                name: 'logo.png',
                url: 'https://via.placeholder.com/200x100/2c3e50/ffffff?text=İPEK+Logo'
            },
            {
                id: 3,
                name: 'project-1.jpg',
                url: 'https://via.placeholder.com/400x250/34495e/ffffff?text=Project+1'
            },
            {
                id: 4,
                name: 'about-image.jpg',
                url: 'https://via.placeholder.com/600x400/34495e/ffffff?text=About+Image'
            }
        ];
        localStorage.setItem('ipek_images', JSON.stringify(defaultImages));
    }

    if (!localStorage.getItem('ipek_settings')) {
        const defaultSettings = {
            siteTitle: 'İPEK - İnce Düşünülmüş Yaşam Alanları',
            siteDescription: '2010 yılından beri metrekarelerle değil santimetrekarelerle çalışarak, ince düşünülmüş yaşam alanları tasarlıyoruz.',
            contactEmail: 'info@ipek.com.tr',
            contactPhone: '+90 212 555 00 00',
            contactAddress: 'Maslak, Büyükdere Cad. No:123, Sarıyer/İstanbul'
        };
        localStorage.setItem('ipek_settings', JSON.stringify(defaultSettings));
    }
}

// Navigation CRUD Operations
function getNavigationItems() {
    initializeData();
    return JSON.parse(localStorage.getItem('ipek_navigation') || '[]');
}

function getNavigationItemById(id) {
    const items = getNavigationItems();
    return items.find(item => item.id === id);
}

function saveNavigationItem(item) {
    const items = getNavigationItems();
    const existingIndex = items.findIndex(i => i.id === item.id);

    if (existingIndex !== -1) {
        items[existingIndex] = { ...items[existingIndex], ...item };
    } else {
        const newId = Math.max(...items.map(i => i.id), 0) + 1;
        items.push({ id: newId, ...item });
    }

    localStorage.setItem('ipek_navigation', JSON.stringify(items));
    return true;
}

function deleteNavigationItem(id) {
    const items = getNavigationItems();
    const filteredItems = items.filter(item => item.id !== id);
    localStorage.setItem('ipek_navigation', JSON.stringify(filteredItems));
    return true;
}

// Pages CRUD Operations
function getPages() {
    initializeData();
    return JSON.parse(localStorage.getItem('ipek_pages') || '[]');
}

function getPageByFile(file) {
    const pages = getPages();
    return pages.find(page => page.file === file);
}

function savePage(page) {
    const pages = getPages();
    const existingIndex = pages.findIndex(p => p.file === page.file);

    if (existingIndex !== -1) {
        pages[existingIndex] = {
            ...pages[existingIndex],
            ...page,
            updated: new Date().toISOString().split('T')[0]
        };
    } else {
        pages.push({
            ...page,
            active: true,
            updated: new Date().toISOString().split('T')[0]
        });
    }

    localStorage.setItem('ipek_pages', JSON.stringify(pages));
    return true;
}

function deletePageItem(file) {
    const pages = getPages();
    const filteredPages = pages.filter(page => page.file !== file);
    localStorage.setItem('ipek_pages', JSON.stringify(filteredPages));
    return true;
}

// Projects CRUD Operations
function getProjects() {
    initializeData();
    return JSON.parse(localStorage.getItem('ipek_projects') || '[]');
}

function getProjectById(id) {
    const projects = getProjects();
    return projects.find(project => project.id === id);
}

function saveProject(project) {
    const projects = getProjects();
    const existingIndex = projects.findIndex(p => p.id === project.id);

    if (existingIndex !== -1) {
        projects[existingIndex] = { ...projects[existingIndex], ...project };
    } else {
        const newId = Math.max(...projects.map(p => p.id), 0) + 1;
        projects.push({ id: newId, ...project });
    }

    localStorage.setItem('ipek_projects', JSON.stringify(projects));
    return true;
}

function deleteProjectItem(id) {
    const projects = getProjects();
    const filteredProjects = projects.filter(project => project.id !== id);
    localStorage.setItem('ipek_projects', JSON.stringify(filteredProjects));
    return true;
}

// Images CRUD Operations
function getImages() {
    initializeData();
    return JSON.parse(localStorage.getItem('ipek_images') || '[]');
}

function saveImage(image) {
    const images = getImages();
    const newId = Math.max(...images.map(i => i.id), 0) + 1;
    images.push({ id: newId, ...image });
    localStorage.setItem('ipek_images', JSON.stringify(images));
    return true;
}

function deleteImageItem(id) {
    const images = getImages();
    const filteredImages = images.filter(image => image.id !== id);
    localStorage.setItem('ipek_images', JSON.stringify(filteredImages));
    return true;
}

// Settings CRUD Operations
function getSettings() {
    initializeData();
    return JSON.parse(localStorage.getItem('ipek_settings') || '{}');
}

function saveSettings(settings) {
    localStorage.setItem('ipek_settings', JSON.stringify(settings));
    return true;
}

// Dynamic Content Generation Functions
function generateNavigationHTML() {
    const navigation = getNavigationItems();
    let html = '';

    navigation.forEach(item => {
        if (item.subItems && item.subItems.length > 0) {
            html += `
                <li class="nav-item dropdown">
                    <a href="${item.url}" class="nav-link">${item.name} <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-content">
                        ${item.subItems.map(sub => `<a href="${sub.url}">${sub.name}</a>`).join('')}
                    </div>
                </li>
            `;
        } else {
            html += `
                <li class="nav-item">
                    <a href="${item.url}" class="nav-link">${item.name}</a>
                </li>
            `;
        }
    });

    return html;
}

function generateProjectsHTML() {
    const projects = getProjects();
    let html = '';

    projects.forEach(project => {
        const statusClass = project.status === 'Yaşam Başladı' ? 'yasam-basladi' :
            project.status === 'Satışta' ? 'satista' : 'insaat';

        html += `
            <div class="project-card" data-category="${project.category}" data-location="${project.location}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.name}">
                    <span class="project-status ${statusClass}">${project.status}</span>
                </div>
                <div class="project-info">
                    <h3 class="project-name">${project.name}</h3>
                    <div class="project-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${project.location}</span>
                    </div>
                    <div class="project-features">
                        <span class="feature-tag">${project.category}</span>
                    </div>
                    <div class="project-action">
                        <a href="#" class="discover-btn">Keşfet <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        `;
    });

    return html;
}

// Export functions for use in main pages
window.İPEKAdmin = {
    getNavigationItems,
    getPages,
    getProjects,
    getImages,
    getSettings,
    generateNavigationHTML,
    generateProjectsHTML
};

// Auto-initialize when script loads
initializeData();
