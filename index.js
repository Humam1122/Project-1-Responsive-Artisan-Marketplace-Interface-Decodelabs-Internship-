/**
 * APPLICATION STATE & DATA ARCHITECTURE
 */
const PRODUCTS_DATA = [
    {
        id: 'prod-1',
        title: 'Nordic Raw Clay Vessel',
        category: 'ceramics',
        price: 145,
        image: 'Assets/ceramics/Nordic Raw Clay Vessel.jpeg',
        artisan: {
            name: 'Ravi Lages',
            avatar: 'https://images.pexels.com/photos/9736246/pexels-photo-9736246.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100',
            region: 'Northside Guilds',
            regionKey: 'north'
        },
        tags: ['Exclusive', 'Organic'],
        availability: 'in-stock',
        sustainability: ['locally-sourced', 'organic'],
        description: 'Hand-thrown using iron-rich local earthen clay gathered from the riverbanks. Reduction fired for 48 hours in a custom wood kiln to achieve a signature rustic finish. Uniquely water-tight and incredibly tactile.'
    },
    {
        id: 'prod-2',
        title: 'Heritage Leather Weekend Duffel',
        category: 'leather',
        price: 380,
        image: 'Assets/leather/Heritage Leather Weekend Duffel.jpeg',
        artisan: {
            name: 'Vlada Karpovich',
            avatar: 'https://images.pexels.com/photos/37613537/pexels-photo-37613537.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100',
            region: 'West End Studios',
            regionKey: 'west'
        },
        tags: ['Best Seller'],
        availability: 'in-stock',
        sustainability: ['locally-sourced'],
        description: 'Vegetable-tanned full-grain oxhide, saddle-stitched entirely by hand with heavy waxed linen thread. Includes solid architectural brass hardware. Designed to age gracefully into a profound, personal patina over decades.'
    },
    {
        id: 'prod-3',
        title: 'Hand-Carved Live Edge Serving Board',
        category: 'wood',
        price: 95,
        image: 'Assets/Hand-Carved Live Edge Serving Board.jpeg',
        artisan: {
            name: 'Ono Kosuki',
            avatar: 'https://images.pexels.com/photos/5974250/pexels-photo-5974250.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100',
            region: 'East River Collective',
            regionKey: 'east'
        },
        tags: ['Locally Sourced'],
        availability: 'in-stock',
        sustainability: ['locally-sourced', 'upcycled'],
        description: 'Sustainably harvested local black walnut, shaped with traditional Japanese hand planes. Sealed with pure food-grade beeswax and natural cold-pressed citrus oil. Each piece features a distinct organic contour.'
    },
    {
        id: 'prod-4',
        title: 'Classic Artisan Tote Bag',
        category: 'textiles',
        price: 210,
        image: 'Assets/tote bag.jpeg',
        artisan: {
            name: 'Elena Rostova',
            avatar: 'https://images.pexels.com/photos/37613537/pexels-photo-37613537.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100',
            region: 'Northside Guilds',
            regionKey: 'north'
        },
        tags: ['Pure Organic'],
        availability: 'custom',
        sustainability: ['organic'],
        description: 'A beautifully structured, hand-woven cotton canvas tote bag featuring strong reinforced handles and a spacious interior for all your daily essentials. Perfectly blends practical durability with subtle artistic style.'
    },
    {
        id: 'prod-5',
        title: 'Charcoal Sculpted Ceremonial Teapot',
        category: 'ceramics',
        price: 125,
        image: 'Assets/ceramics/Charcoal Sculpted Ceremonial Teapot.jpeg',
        artisan: {
            name: 'Tuti Isnawati',
            avatar: 'https://images.pexels.com/photos/9736246/pexels-photo-9736246.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100',
            region: 'East River Collective',
            regionKey: 'east'
        },
        tags: ['Limited Run'],
        availability: 'in-stock',
        sustainability: ['locally-sourced'],
        description: 'Minimalist functional art built for serious tea ceremonies. Features a hand-carved unglazed outer texture providing excellent grip and high-performance thermal mass. Carefully balanced pour spout.'
    },
    {
        id: 'prod-7',
        title: 'Hand-Tooled Leather Journal Cover',
        category: 'leather',
        price: 68,
        image: 'Assets/leather/Hand-Tooled Leather Journal Cover.jpeg',
        artisan: {
            name: 'Anna Shvets',
            avatar: 'https://images.pexels.com/photos/37613537/pexels-photo-37613537.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100',
            region: 'Northside Guilds',
            regionKey: 'north'
        },
        tags: [],
        availability: 'in-stock',
        sustainability: ['locally-sourced'],
        description: 'Refillable thick saddle-leather cover featuring bespoke perimeter stamping and hand-burnished beeswax edges. Comes shipped with a 200-page hand-bound acid-free raw cotton paper block.'
    },
    {
        id: 'prod-8',
        title: 'Speckled Sand Glaze Breakfast Set',
        category: 'ceramics',
        price: 110,
        image: 'Assets/ceramics/Speckled Sand Glaze Breakfast Set.jpeg',
        artisan: {
            name: 'Pew Nguyen',
            avatar: 'https://images.pexels.com/photos/9736246/pexels-photo-9736246.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100',
            region: 'East River Collective',
            regionKey: 'east'
        },
        tags: ['Set of 2'],
        availability: 'in-stock',
        sustainability: ['locally-sourced', 'organic'],
        description: 'A matching set containing two robust handled mugs and two deep utility nesting bowls. Finished with a satin soft-white glaze infused with coarse natural crushed river sand speckles.'
    }
];

// Centralized Interactive Application State
const STATE = {
    activeCategory: 'all',
    searchQuery: '',
    maxPrice: 500,
    filters: {
        availability: ['in-stock'],
        sustainability: [],
        region: []
    },
    sortBy: 'featured',
    cart: [],
    favorites: [],
    appliedPromo: null
};

const PROMO_CODES = {
    'GUILD20': 0.20,
    'ARTISAN2025': 0.15,
    'LOCALFIRST': 0.10
};

/**
 * DOM NODE REFERENCES
 */
const DOM = {
    header: document.getElementById('siteHeader'),
    mainListingGrid: document.getElementById('mainListingGrid'),
    resultsCount: document.getElementById('resultsCount'),
    gridEmptyState: document.getElementById('gridEmptyState'),
    
    // Filters
    categoryCarousel: document.getElementById('categoryCarousel'),
    desktopSearch: document.getElementById('desktopSearch'),
    mobileSearch: document.getElementById('mobileSearch'),
    sortSelect: document.getElementById('sortSelect'),
    priceSlider: document.getElementById('priceSlider'),
    priceSliderVal: document.getElementById('priceSliderVal'),
    filterCheckboxes: document.querySelectorAll('.filter-checkbox'),
    activeFiltersContainer: document.getElementById('activeFiltersContainer'),
    resetAllFiltersBtn: document.getElementById('resetAllFiltersBtn'),
    
    // Drawers & Modals
    menuToggleBtn: document.getElementById('menuToggleBtn'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    drawerCloseBtn: document.getElementById('drawerCloseBtn'),
    mainBackdrop: document.getElementById('mainBackdrop'),
    
    mobileFilterBtn: document.getElementById('mobileFilterBtn'),
    filterSidebar: document.getElementById('filterSidebar'),
    sidebarCloseBtn: document.getElementById('sidebarCloseBtn'),
    applyMobileFiltersBtn: document.getElementById('applyMobileFiltersBtn'),

    navCartBtn: document.getElementById('navCartBtn'),
    cartDrawer: document.getElementById('cartDrawer'),
    cartCloseBtn: document.getElementById('cartCloseBtn'),
    cartItemsContainer: document.getElementById('cartItemsContainer'),
    cartEmptyState: document.getElementById('cartEmptyState'),
    cartFooterState: document.getElementById('cartFooterState'),
    startExploringBtn: document.getElementById('startExploringBtn'),
    
    navFavBtn: document.getElementById('navFavBtn'),
    favBadge: document.getElementById('favBadge'),
    cartBadge: document.getElementById('cartBadge'),

    // Cart Footer Logic
    promoInput: document.getElementById('promoInput'),
    applyPromoBtn: document.getElementById('applyPromoBtn'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    discountRow: document.getElementById('discountRow'),
    cartDiscount: document.getElementById('cartDiscount'),
    cartTotal: document.getElementById('cartTotal'),
    checkoutBtn: document.getElementById('checkoutBtn'),

    // Quick View Modal
    quickViewModal: document.getElementById('quickViewModal'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalImg: document.getElementById('modalImg'),
    modalCategory: document.getElementById('modalCategory'),
    modalTitle: document.getElementById('modalTitle'),
    modalArtisanImg: document.getElementById('modalArtisanImg'),
    modalArtisanName: document.getElementById('modalArtisanName'),
    modalArtisanRegion: document.getElementById('modalArtisanRegion'),
    modalDesc: document.getElementById('modalDesc'),
    modalAttrMat: document.getElementById('modalAttrMat'),
    modalAttrSus: document.getElementById('modalAttrSus'),
    modalAttrAvail: document.getElementById('modalAttrAvail'),
    modalPrice: document.getElementById('modalPrice'),
    modalAddToBagBtn: document.getElementById('modalAddToBagBtn'),

    // Form
    newsletterForm: document.getElementById('newsletterForm'),
    toastContainer: document.getElementById('toastContainer')
};


/**
 * INITIALIZATION CORE
 */
function initApp() {
    bindEvents();
    renderMarketplace();
    updateCartState();
    updateFavoritesState();
    
    // Check viewport on load to manage responsive mobile button states
    handleResize();
    window.addEventListener('resize', handleResize);
}


/**
 * EVENT DELEGATION & BINDINGS
 */
function bindEvents() {
    // Sticky Header Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            DOM.header.classList.add('scrolled');
        } else {
            DOM.header.classList.remove('scrolled');
        }
    });

    // Navigation Active State tracking
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            e.currentTarget.classList.add('active');
        });
    });

    // Category Horizon
    DOM.categoryCarousel.addEventListener('click', (e) => {
        const card = e.target.closest('.category-card');
        if (!card) return;

        // Update active style
        DOM.categoryCarousel.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // Update State
        STATE.activeCategory = card.dataset.category;
        renderMarketplace();
        showToast(`Filtering by: ${card.querySelector('.category-name').textContent}`, 'success');
    });

    // Search Inputs
    const handleSearch = (e) => {
        STATE.searchQuery = e.target.value.trim().toLowerCase();
        // Sync inputs
        if (e.target === DOM.desktopSearch) DOM.mobileSearch.value = e.target.value;
        if (e.target === DOM.mobileSearch) DOM.desktopSearch.value = e.target.value;
        renderMarketplace();
    };
    DOM.desktopSearch.addEventListener('input', handleSearch);
    DOM.mobileSearch.addEventListener('input', handleSearch);

    // Sort Select
    DOM.sortSelect.addEventListener('change', (e) => {
        STATE.sortBy = e.target.value;
        renderMarketplace();
    });

    // Price Slider
    DOM.priceSlider.addEventListener('input', (e) => {
        STATE.maxPrice = parseInt(e.target.value);
        DOM.priceSliderVal.textContent = `$${STATE.maxPrice}`;
        renderMarketplace();
    });

    // Checkbox Filters
    DOM.filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const filterType = e.target.dataset.filterType;
            const value = e.target.value;

            if (e.target.checked) {
                if (!STATE.filters[filterType].includes(value)) {
                    STATE.filters[filterType].push(value);
                }
            } else {
                STATE.filters[filterType] = STATE.filters[filterType].filter(v => v !== value);
            }
            renderMarketplace();
        });
    });

    // Reset Filters
    DOM.resetAllFiltersBtn.addEventListener('click', resetAllFilters);

    // Active Filter Chips Container Click Delegation
    DOM.activeFiltersContainer.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-filter');
        if (removeBtn) {
            const { type, value } = removeBtn.dataset;
            if (type === 'category') {
                // Reset category
                const allCard = DOM.categoryCarousel.querySelector('[data-category="all"]');
                allCard.click();
            } else if (type === 'price') {
                DOM.priceSlider.value = 500;
                DOM.priceSlider.dispatchEvent(new Event('input'));
            } else if (type === 'search') {
                DOM.desktopSearch.value = '';
                DOM.desktopSearch.dispatchEvent(new Event('input'));
            } else {
                // Remove checkbox filter
                STATE.filters[type] = STATE.filters[type].filter(v => v !== value);
                // Uncheck DOM
                const cb = document.querySelector(`.filter-checkbox[data-filter-type="${type}"][value="${value}"]`);
                if (cb) cb.checked = false;
                renderMarketplace();
            }
        }

        if (e.target.classList.contains('clear-filters')) {
            resetAllFilters();
        }
    });


    // --- DRAWERS & MODALS LOGIC ---

    // Mobile Navigation Drawer
    DOM.menuToggleBtn.addEventListener('click', () => openOverlay(DOM.mobileDrawer));
    DOM.drawerCloseBtn.addEventListener('click', () => closeOverlay(DOM.mobileDrawer));
    
    // Mobile Filter Bottom Sheet
    DOM.mobileFilterBtn.addEventListener('click', () => {
        openOverlay(DOM.filterSidebar);
        DOM.applyMobileFiltersBtn.style.display = 'block';
    });
    DOM.sidebarCloseBtn.addEventListener('click', () => closeOverlay(DOM.filterSidebar));
    DOM.applyMobileFiltersBtn.addEventListener('click', () => {
        closeOverlay(DOM.filterSidebar);
        showToast("Filters successfully updated", "success");
    });

    // Shopping Cart Drawer
    DOM.navCartBtn.addEventListener('click', () => openOverlay(DOM.cartDrawer));
    DOM.cartCloseBtn.addEventListener('click', () => closeOverlay(DOM.cartDrawer));
    DOM.startExploringBtn.addEventListener('click', () => {
        closeOverlay(DOM.cartDrawer);
        document.getElementById('marketplace').scrollIntoView({ behavior: 'smooth' });
    });

    // Favorites actions
    DOM.navFavBtn.addEventListener('click', () => {
        // Filter view to favorites
        if (STATE.favorites.length === 0) {
            showToast("Your favorites list is currently empty", "danger");
            return;
        }
        // Set custom state or prompt
        showToast(`Displaying ${STATE.favorites.length} saved masterworks`, "success");
    });

    // Fullscreen Backdrop Click
    DOM.mainBackdrop.addEventListener('click', () => {
        closeOverlay(DOM.mobileDrawer);
        closeOverlay(DOM.filterSidebar);
        closeOverlay(DOM.cartDrawer);
    });

    // Quick View Modal
    DOM.modalCloseBtn.addEventListener('click', () => {
        DOM.quickViewModal.classList.remove('open');
    });
    DOM.modalBackdrop.addEventListener('click', () => {
        DOM.quickViewModal.classList.remove('open');
    });


    // --- MAIN LISTING GRID ACTIONS DELEGATION ---
    DOM.mainListingGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.item-card');
        if (!card) return;

        const prodId = card.dataset.productId;
        const product = PRODUCTS_DATA.find(p => p.id === prodId);
        if (!product) return;

        // Favorite Button Click
        if (e.target.closest('.fav-btn')) {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(product);
            return;
        }

        // Add To Bag Click
        if (e.target.closest('.add-to-bag-btn')) {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product);
            return;
        }

        // Quick View Click
        if (e.target.closest('.quick-view-btn') || e.target.closest('.item-visual')) {
            e.preventDefault();
            e.stopPropagation();
            openQuickView(product);
            return;
        }
    });


    // --- CART FOOTER ACTIONS ---
    DOM.applyPromoBtn.addEventListener('click', () => {
        const code = DOM.promoInput.value.trim().toUpperCase();
        if (!code) return;

        if (PROMO_CODES[code] !== undefined) {
            STATE.appliedPromo = {
                code,
                discount: PROMO_CODES[code]
            };
            updateCartState();
            showToast(`Promotion code ${code} applied successfully!`, 'success');
        } else {
            showToast('Invalid Guild promotion code', 'danger');
        }
    });

    DOM.checkoutBtn.addEventListener('click', () => {
        if (STATE.cart.length === 0) return;
        
        // Simulate Secure Checkout Flow
        showToast('Redirecting to local bank terminal...', 'success');
        setTimeout(() => {
            alert(`✦ TERRA & TWINE SECURE CHECKOUT ✦\n\nThank you for supporting independent masters.\nOrder Total: ${DOM.cartTotal.textContent}\nStatus: Verified Escrow\n\nYour funds go 100% directly to the craftspeople.`);
            STATE.cart = [];
            STATE.appliedPromo = null;
            updateCartState();
            closeOverlay(DOM.cartDrawer);
        }, 1200);
    });


    // --- NEWSLETTER ---
    DOM.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = DOM.newsletterForm.querySelector('input').value;
        showToast(`Welcome! ${email} registered for Guild Dispatches.`, 'success');
        DOM.newsletterForm.reset();
    });

    // Drawer internal navigation links auto-close
    document.querySelectorAll('.drawer-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            closeOverlay(DOM.mobileDrawer);
        });
    });
}


/**
 * RESPONSIVE CONTROLS ADAPTATION
 */
function handleResize() {
    if (window.innerWidth >= 1024) {
        // Remove mobile overrides if expanded
        DOM.filterSidebar.classList.remove('open');
        DOM.applyMobileFiltersBtn.style.display = 'none';
    }
}


/**
 * CORE RENDERING ENGINE
 */
function renderMarketplace() {
    // 1. Filter Data based on current state
    const filteredProducts = PRODUCTS_DATA.filter(product => {
        // Category Filter
        if (STATE.activeCategory !== 'all' && product.category !== STATE.activeCategory) {
            return false;
        }

        // Search Query Filter
        if (STATE.searchQuery) {
            const query = STATE.searchQuery;
            const matchTitle = product.title.toLowerCase().includes(query);
            const matchCategory = product.category.toLowerCase().includes(query);
            const matchArtisan = product.artisan.name.toLowerCase().includes(query);
            const matchDesc = product.description.toLowerCase().includes(query);

            if (!matchTitle && !matchCategory && !matchArtisan && !matchDesc) {
                return false;
            }
        }

        // Max Price Filter
        if (product.price > STATE.maxPrice) {
            return false;
        }

        // Availability Filter
        if (STATE.filters.availability.length > 0) {
            if (!STATE.filters.availability.includes(product.availability)) {
                return false;
            }
        }

        // Sustainability Filter (Must contain at least one of the active traits if specified)
        if (STATE.filters.sustainability.length > 0) {
            const hasTrait = STATE.filters.sustainability.some(trait => product.sustainability.includes(trait));
            if (!hasTrait) return false;
        }

        // Region Filter
        if (STATE.filters.region.length > 0) {
            if (!STATE.filters.region.includes(product.artisan.regionKey)) {
                return false;
            }
        }

        return true;
    });

    // 2. Sort Data
    filteredProducts.sort((a, b) => {
        if (STATE.sortBy === 'price-asc') return a.price - b.price;
        if (STATE.sortBy === 'price-desc') return b.price - a.price;
        if (STATE.sortBy === 'newest') return b.id.localeCompare(a.id);
        // default featured
        return 0;
    });

    // 3. Update Meta Counters
    DOM.resultsCount.textContent = filteredProducts.length;

    // 4. Render Dynamic Active Filter Chips
    renderActiveFilterChips();

    // 5. Clear Main Grid & Render Item Cards
    // Remove all product cards leaving the empty state element untouched
    const existingCards = DOM.mainListingGrid.querySelectorAll('.item-card');
    existingCards.forEach(card => card.remove());

    if (filteredProducts.length === 0) {
        DOM.gridEmptyState.style.display = 'block';
    } else {
        DOM.gridEmptyState.style.display = 'none';

        // Append newly built fragments
        const fragment = document.createDocumentFragment();

        filteredProducts.forEach(product => {
            const isFav = STATE.favorites.some(p => p.id === product.id);

            // Build Tags HTML
            let tagsHtml = '';
            product.tags.forEach(tag => {
                const isExclusive = tag.toLowerCase() === 'exclusive';
                tagsHtml += `<span class="item-tag ${isExclusive ? 'exclusive' : ''}">${tag}</span>`;
            });

            const card = document.createElement('article');
            card.className = 'item-card';
            card.dataset.productId = product.id;

            card.innerHTML = `
                <div class="item-visual">
                    <img src="${product.image}" alt="${product.title}" class="item-img" loading="lazy">
                    
                    <div class="item-tags">
                        ${tagsHtml}
                    </div>

                    <button class="fav-btn ${isFav ? 'active' : ''}" aria-label="Add to favorites">
                        <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>

                    <div class="item-overlay">
                        <button class="quick-view-btn">Quick Inspect</button>
                    </div>
                </div>

                <div class="item-content">
                    <div>
                        <div class="item-meta">
                            <div class="item-category">${product.category}</div>
                            <h3 class="item-title">${product.title}</h3>
                        </div>

                        <div class="artisan-info">
                            <i class="fa-solid fa-hammer" style="font-size: 0.7rem;"></i>
                            <span>${product.artisan.name}</span>
                            <span style="margin: 0 0.2rem;">•</span>
                            <span style="font-size: 0.75rem;">${product.artisan.region}</span>
                        </div>
                    </div>

                    <div class="item-footer">
                        <div class="item-price">$${product.price}</div>
                        <button class="add-to-bag-btn" aria-label="Add to Bag">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;

            fragment.appendChild(card);
        });

        DOM.mainListingGrid.insertBefore(fragment, DOM.gridEmptyState);
    }
}


/**
 * ACTIVE FILTERS CHIP GENERATOR
 */
function renderActiveFilterChips() {
    DOM.activeFiltersContainer.innerHTML = '';

    let hasFilters = false;

    // Category
    if (STATE.activeCategory !== 'all') {
        hasFilters = true;
        const chip = document.createElement('div');
        chip.className = 'filter-chip';
        chip.innerHTML = `
            <span>Craft: <strong>${STATE.activeCategory}</strong></span>
            <button class="remove-filter" data-type="category"><i class="fa-solid fa-xmark"></i></button>
        `;
        DOM.activeFiltersContainer.appendChild(chip);
    }

    // Search
    if (STATE.searchQuery) {
        hasFilters = true;
        const chip = document.createElement('div');
        chip.className = 'filter-chip';
        chip.innerHTML = `
            <span>Search: <strong>"${STATE.searchQuery}"</strong></span>
            <button class="remove-filter" data-type="search"><i class="fa-solid fa-xmark"></i></button>
        `;
        DOM.activeFiltersContainer.appendChild(chip);
    }

    // Price
    if (STATE.maxPrice < 500) {
        hasFilters = true;
        const chip = document.createElement('div');
        chip.className = 'filter-chip';
        chip.innerHTML = `
            <span>Max: <strong>$${STATE.maxPrice}</strong></span>
            <button class="remove-filter" data-type="price"><i class="fa-solid fa-xmark"></i></button>
        `;
        DOM.activeFiltersContainer.appendChild(chip);
    }

    // Checkboxes
    Object.keys(STATE.filters).forEach(type => {
        STATE.filters[type].forEach(val => {
            hasFilters = true;
            const chip = document.createElement('div');
            chip.className = 'filter-chip';
            chip.innerHTML = `
                <span>${val.replace('-', ' ')}</span>
                <button class="remove-filter" data-type="${type}" data-value="${val}"><i class="fa-solid fa-xmark"></i></button>
            `;
            DOM.activeFiltersContainer.appendChild(chip);
        });
    });

    // Clear All action
    if (hasFilters) {
        const clearBtn = document.createElement('span');
        clearBtn.className = 'clear-filters';
        clearBtn.textContent = 'Clear all criteria';
        DOM.activeFiltersContainer.appendChild(clearBtn);
    }
}


function resetAllFilters() {
    STATE.activeCategory = 'all';
    STATE.searchQuery = '';
    STATE.maxPrice = 500;
    STATE.filters = {
        availability: ['in-stock'],
        sustainability: [],
        region: []
    };

    // Sync DOM Nodes
    DOM.desktopSearch.value = '';
    DOM.mobileSearch.value = '';
    DOM.priceSlider.value = 500;
    DOM.priceSliderVal.textContent = '$500';
    
    // Reset Active Styles
    DOM.categoryCarousel.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    DOM.categoryCarousel.querySelector('[data-category="all"]').classList.add('active');

    // Uncheck Checkboxes
    DOM.filterCheckboxes.forEach(cb => {
        if (cb.dataset.filterType === 'availability' && cb.value === 'in-stock') {
            cb.checked = true;
        } else {
            cb.checked = false;
        }
    });

    renderMarketplace();
    showToast("Marketplace filters cleared", "success");
}


/**
 * CART LOGIC
 */
function addToCart(product) {
    const existingItem = STATE.cart.find(item => item.product.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        STATE.cart.push({
            product,
            quantity: 1
        });
    }

    updateCartState();
    
    // Pulse Badge
    DOM.cartBadge.classList.add('pulse');
    setTimeout(() => DOM.cartBadge.classList.remove('pulse'), 400);

    showToast(`Added ${product.title} to your bag`, 'success');
}

function removeFromCart(productId) {
    STATE.cart = STATE.cart.filter(item => item.product.id !== productId);
    updateCartState();
    showToast('Item removed from collection', 'success');
}

function updateQuantity(productId, delta) {
    const item = STATE.cart.find(i => i.product.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartState();
    }
}

function updateCartState() {
    // Aggregate metrics
    const totalItems = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = STATE.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    // Update Badges
    DOM.cartBadge.textContent = totalItems;

    // Render Cart Drawer Dom
    DOM.cartItemsContainer.innerHTML = '';

    if (STATE.cart.length === 0) {
        DOM.cartItemsContainer.appendChild(DOM.cartEmptyState);
        DOM.cartFooterState.style.display = 'none';
    } else {
        DOM.cartFooterState.style.display = 'flex';

        STATE.cart.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.product.image}" alt="" class="cart-item-img">
                <div class="cart-item-details">
                    <div>
                        <div class="cart-item-title">${item.product.title}</div>
                        <div class="cart-item-artisan">By ${item.product.artisan.name}</div>
                    </div>

                    <div class="cart-item-controls">
                        <div class="qty-controls">
                            <button class="qty-btn dec" data-id="${item.product.id}">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn inc" data-id="${item.product.id}">+</button>
                        </div>

                        <div class="cart-item-price">$${item.product.price * item.quantity}</div>
                        
                        <button class="remove-item-btn" data-id="${item.product.id}" aria-label="Remove item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            `;
            DOM.cartItemsContainer.appendChild(itemEl);
        });

        // Bind cart internal actions
        DOM.cartItemsContainer.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                const delta = e.target.classList.contains('inc') ? 1 : -1;
                updateQuantity(id, delta);
            });
        });

        DOM.cartItemsContainer.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                removeFromCart(id);
            });
        });
    }

    // Calculate Promotions
    let discount = 0;
    if (STATE.appliedPromo) {
        discount = subtotal * STATE.appliedPromo.discount;
        DOM.discountRow.style.display = 'flex';
        DOM.cartDiscount.textContent = `-$${discount.toFixed(2)} (${STATE.appliedPromo.code})`;
    } else {
        DOM.discountRow.style.display = 'none';
    }

    const total = subtotal - discount;

    // Sync Footer Summaries
    DOM.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    DOM.cartTotal.textContent = `$${total.toFixed(2)}`;
}


/**
 * FAVORITES LOGIC
 */
function toggleFavorite(product) {
    const index = STATE.favorites.findIndex(p => p.id === product.id);

    if (index > -1) {
        STATE.favorites.splice(index, 1);
        showToast(`Removed from saved list`, 'success');
    } else {
        STATE.favorites.push(product);
        showToast(`Saved ${product.title} to registry`, 'success');
    }

    updateFavoritesState();
    
    // Re-render marketplace to sync the active red heart icons directly!
    renderMarketplace();
}

function updateFavoritesState() {
    DOM.favBadge.textContent = STATE.favorites.length;
    
    // Pulse Badge
    DOM.favBadge.classList.add('pulse');
    setTimeout(() => DOM.favBadge.classList.remove('pulse'), 400);
}


/**
 * QUICK VIEW MODAL LOGIC
 */
function openQuickView(product) {
    // Populate Nodes
    DOM.modalImg.src = product.image;
    DOM.modalImg.alt = product.title;
    DOM.modalCategory.textContent = product.category;
    DOM.modalTitle.textContent = product.title;
    
    DOM.modalArtisanImg.src = product.artisan.avatar;
    DOM.modalArtisanName.textContent = product.artisan.name;
    DOM.modalArtisanRegion.textContent = product.artisan.region;

    DOM.modalDesc.textContent = product.description;

    // Format dynamic attributes beautifully
    DOM.modalAttrMat.textContent = product.category === 'ceramics' ? 'Local Iron-Rich Clay' : 
                                  product.category === 'wood' ? 'Sustainably Harvested Timber' : 
                                  product.category === 'leather' ? 'Full-Grain Oxhide' : 'Pure Raw Fiber';
    
    DOM.modalAttrSus.textContent = product.sustainability.map(s => s.replace('-', ' ')).join(', ') || 'Traditional Masterwork';
    DOM.modalAttrAvail.textContent = product.availability === 'in-stock' ? 'In Stock & Ready' : 'Custom Commission';
    
    DOM.modalPrice.textContent = `$${product.price}`;

    // Bind single direct action
    DOM.modalAddToBagBtn.onclick = () => {
        addToCart(product);
        DOM.quickViewModal.classList.remove('open');
    };

    // Trigger Display
    DOM.quickViewModal.classList.add('open');
}


/**
 * OVERLAYS & BACKDROPS LOGIC
 */
function openOverlay(element) {
    DOM.mainBackdrop.classList.add('active');
    element.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent deep scrolling
}

function closeOverlay(element) {
    DOM.mainBackdrop.classList.remove('active');
    element.classList.remove('open');
    document.body.style.overflow = '';
}


/**
 * NOTIFICATION TOAST ENGINE
 */
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';

    toast.innerHTML = `
        <i class="fa-solid ${iconClass}"></i>
        <span class="toast-text">${message}</span>
    `;

    DOM.toastContainer.appendChild(toast);

    // Self-destruct smoothly
    setTimeout(() => {
        toast.style.animation = 'toastFadeOut 0.25s forwards';
        setTimeout(() => toast.remove(), 250);
    }, 3000);
}

// Run application
document.addEventListener('DOMContentLoaded', initApp);
