
        // ===== CART FUNCTIONALITY =====
        (function() {
            let cart = [];

            const cartContainer = document.getElementById('cart-items-container');
            const cartTotalSpan = document.getElementById('cart-total-amount');
            const clearCartBtn = document.getElementById('clear-cart-btn');

            const formatPrice = (num) => `R${num.toFixed(2)}`;

            function renderCart() {
                if (cart.length === 0) {
                    cartContainer.innerHTML = `<div class="empty-cart">🛒 No items yet</div>`;
                    cartTotalSpan.textContent = 'R0.00';
                    return;
                }

                let html = '';
                let total = 0;

                cart.forEach((item, index) => {
                    const lineTotal = item.price * item.quantity;
                    total += lineTotal;
                    html += `
                        <div class="cart-item" data-index="${index}">
                            <div class="cart-item-left">
                                <span class="cart-item-name">${item.name}</span>
                                <span class="cart-item-qty-price">${item.quantity} × ${formatPrice(item.price)}</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:6px;">
                                <span class="cart-item-total">${formatPrice(lineTotal)}</span>
                                <button class="remove-item" data-index="${index}" title="Remove one"><i class="fas fa-minus-circle"></i></button>
                                <button class="remove-item" data-index="${index}" data-remove-all="true" title="Remove all"><i class="fas fa-times-circle"></i></button>
                            </div>
                        </div>
                    `;
                });

                cartContainer.innerHTML = html;
                cartTotalSpan.textContent = formatPrice(total);

                document.querySelectorAll('.remove-item').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const index = parseInt(this.dataset.index, 10);
                        if (isNaN(index)) return;
                        const removeAll = this.dataset.removeAll === 'true';
                        if (removeAll) {
                            cart.splice(index, 1);
                        } else {
                            if (cart[index]) {
                                if (cart[index].quantity <= 1) {
                                    cart.splice(index, 1);
                                } else {
                                    cart[index].quantity -= 1;
                                }
                            }
                        }
                        renderCart();
                    });
                });
            }

            function addItemToCart(name, price, quantity) {
                if (quantity <= 0) return;
                const existing = cart.find(item => item.name === name && item.price === price);
                if (existing) {
                    existing.quantity += quantity;
                } else {
                    cart.push({ name, price, quantity });
                }
                renderCart();
            }

            // Add event listeners to all "Add" buttons
            document.querySelectorAll('.add-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    const menuItem = this.closest('.menu-item');
                    if (!menuItem) return;

                    const name = menuItem.dataset.name;
                    const price = parseFloat(menuItem.dataset.price);
                    if (isNaN(price) || !name) return;

                    const qtyInput = menuItem.querySelector('.qty-input');
                    let qty = parseInt(qtyInput.value, 10);
                    if (isNaN(qty) || qty < 1) qty = 1;
                    if (qty > 20) qty = 20;
                    qtyInput.value = qty;

                    addItemToCart(name, price, qty);
                });
            });

            // Clear cart
            clearCartBtn.addEventListener('click', function() {
                cart = [];
                renderCart();
            });

            // Sync quantity inputs
            document.querySelectorAll('.qty-input').forEach(inp => {
                inp.addEventListener('change', function() {
                    let val = parseInt(this.value, 10);
                    if (isNaN(val) || val < 1) val = 1;
                    if (val > 20) val = 20;
                    this.value = val;
                });
            });

            renderCart();
        })();

        // ===== MENU TABS =====
        const tabBtns = document.querySelectorAll('.tab-btn');
        const menuGrids = {
            breakfast: document.getElementById('breakfast'),
            desserts: document.getElementById('desserts'),
            dinner: document.getElementById('dinner')
        };

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                Object.values(menuGrids).forEach(grid => grid.classList.add('hidden'));
                const tab = btn.dataset.tab;
                if (menuGrids[tab]) menuGrids[tab].classList.remove('hidden');
            });
        });

        // ===== HAMBURGER =====
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('open'));
        });

        // ===== RESERVATION FORM =====
        const form = document.getElementById('reservationForm');
        const modal = document.getElementById('reservationModal');
        const modalClose = document.getElementById('modalClose');
        const modalBtn = document.getElementById('modalBtn');
        const modalDetails = document.getElementById('modalDetails');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('resName').value || 'Guest';
            const date = document.getElementById('resDate').value || 'today';
            const time = document.getElementById('resTime').value || 'evening';
            const guests = document.getElementById('resGuests').value || '2';
            modalDetails.textContent = `${name} · ${guests} guests · ${date} at ${time}`;
            modal.style.display = 'flex';
        });

        function closeModal() {
            modal.style.display = 'none';
            form.reset();
        }
        modalClose.addEventListener('click', closeModal);
        modalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

        // ===== TESTIMONIAL SLIDER =====
        const track = document.getElementById('testimonialTrack');
        const cards = track.querySelectorAll('.testimonial-card');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dotsContainer = document.getElementById('sliderDots');
        let currentIndex = 0;
        let visibleCards = window.innerWidth < 768 ? 1 : 2;

        function updateSlider() {
            const cardWidth = cards[0]?.offsetWidth || 0;
            const gap = 32;
            const offset = currentIndex * (cardWidth + gap);
            track.style.transform = `translateX(-${offset}px)`;
            const dots = dotsContainer.querySelectorAll('span');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        function initSlider() {
            visibleCards = window.innerWidth < 768 ? 1 : 2;
            const totalDots = Math.ceil(cards.length / visibleCards);
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalDots; i++) {
                const dot = document.createElement('span');
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateSlider();
                });
                dotsContainer.appendChild(dot);
            }
            if (totalDots > 0) dotsContainer.querySelector('span').classList.add('active');
            currentIndex = 0;
            updateSlider();
        }

        prevBtn.addEventListener('click', () => {
            const total = Math.ceil(cards.length / visibleCards);
            currentIndex = (currentIndex - 1 + total) % total;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            const total = Math.ceil(cards.length / visibleCards);
            currentIndex = (currentIndex + 1) % total;
            updateSlider();
        });

        window.addEventListener('resize', initSlider);
        initSlider();

        // ===== BACK TO TOP =====
        const backBtn = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backBtn.classList.add('visible');
            } else {
                backBtn.classList.remove('visible');
            }
        });
        backBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // ===== CURRENT YEAR =====
        document.getElementById('currentYear').textContent = new Date().getFullYear();

        // ===== NAV ACTIVE LINK =====
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const top = section.offsetTop - 120;
                if (window.scrollY >= top) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });