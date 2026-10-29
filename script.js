/**
 * AUTOMARCAS ITAÚNA — SCRIPT PRINCIPAL (COMPATÍVEL COM FILE:// E HTTP://)
 * ============================================================================
 * Centraliza os dados verificados dos veículos da pasta `catalogo/`,
 * geração de links do WhatsApp para o consultor Alan (+55 37 9988-0061),
 * filtros do catálogo e galeria da página de detalhes.
 */

(function () {
  'use strict';

  const STORE_INFO = {
    name: 'Automarcas Itaúna',
    consultantName: 'Alan',
    whatsappNumber: '553799880061',
    address: 'Avenida Silva Jardim, 653, Itaúna'
  };

  /**
   * Dados reais e verificados da pasta `catalogo/`.
   * Para adicionar ou editar veículos manualmente, basta atualizar este array.
   * Caso `price` seja preenchido com um número (ex.: 155000), o preço e os
   * filtros de preço são exibidos automaticamente.
   */
  const VEHICLES = [
    {
      id: 'carro1',
      slug: 'toyota-corolla-altis-hybrid-premium-2024',
      brand: 'Toyota',
      model: 'Corolla',
      fullName: 'Toyota Corolla Altis Hybrid Premium',
      version: 'Altis Hybrid Premium 1.8 Flex',
      category: 'Sedã',
      year: '2024',
      yearSort: 2024,
      mileageKm: 12000,
      mileageDisplay: '12.000 km',
      engine: '1.8 Flex Híbrido + 2 motores elétricos (122 cv)',
      engineShort: '1.8 Híbrido Flex • 122 cv',
      transmission: 'Automático Hybrid Transaxle (CVT)',
      fuel: 'Flex / Híbrido',
      price: null,
      shortDescription:
        'Sedã premium com apenas 12.000 km que une sofisticação, tecnologia híbrida, pacote Toyota Safety Sense e excelente economia de combustível.',
      verifiedDescription: [
        'Sedã premium que une sofisticação, tecnologia, conforto e excelente economia de combustível, com apenas 12.000 km rodados.',
        'Economia que impressiona: até 18,5 km/l na cidade e 15,7 km/l na estrada, com gasolina, conforme dados do Inmetro.',
        'Um Corolla diferenciado para quem busca alto padrão, tecnologia híbrida e economia sem abrir mão do conforto.'
      ],
      images: [
        {
          src: 'catalogo/carro1/Captura%20de%20tela%202026-10-29%20132844.png',
          alt: 'Toyota Corolla Altis Hybrid Premium 2024 preto visto de frente em ângulo três quartos',
          caption: 'Vista dianteira — Toyota Corolla Altis Hybrid Premium 2024',
          width: 598,
          height: 681
        },
        {
          src: 'catalogo/carro1/Captura%20de%20tela%202026-10-29%20132923.png',
          alt: 'Toyota Corolla Altis Hybrid Premium 2024 preto visto de traseira em ângulo três quartos',
          caption: 'Vista traseira — Toyota Corolla Altis Hybrid Premium 2024',
          width: 573,
          height: 653
        }
      ],
      specGroups: [
        {
          title: 'Motorização e desempenho',
          items: [
            'Motor 1.8 Flex híbrido',
            'Dois motores elétricos',
            'Potência combinada de 122 cv',
            'Câmbio automático Hybrid Transaxle (CVT)',
            'Modos de condução ECO, Normal, Power e EV',
            'Excelente eficiência energética'
          ]
        },
        {
          title: 'Principais opcionais e equipamentos',
          items: [
            'Painel de instrumentos digital TFT de 12,3”',
            'Central multimídia Toyota Play de 9”',
            'Apple CarPlay e Android Auto',
            'Bancos com revestimento em couro e material sintético',
            'Banco do motorista com ajuste elétrico',
            'Ar-condicionado digital automático Dual Zone',
            'Carregador de celular por indução',
            'Chave presencial Smart Entry e partida Push Start',
            'Rodas de liga leve aro 17”',
            'Freio de estacionamento eletrônico',
            'Volante multifuncional revestido em couro'
          ]
        },
        {
          title: 'Segurança e tecnologia',
          items: [
            '7 airbags',
            'Toyota Safety Sense',
            'Controle adaptativo de velocidade de cruzeiro',
            'Assistente de pré-colisão com frenagem automática',
            'Alerta de mudança de faixa com assistência de direção',
            'Farol alto automático',
            'Monitoramento de ponto cego',
            'Alerta de tráfego cruzado traseiro',
            'Sensores de estacionamento dianteiro e traseiro',
            'Controle de estabilidade e tração'
          ]
        }
      ]
    },
    {
      id: 'carro2',
      slug: 'hyundai-creta-comfort-1-0-turbo-2024-2025',
      brand: 'Hyundai',
      model: 'Creta',
      fullName: 'Hyundai Creta Comfort 1.0 Turbo',
      version: 'Comfort 1.0 Turbo Automático',
      category: 'SUV',
      year: '2024/2025',
      yearSort: 2025,
      mileageKm: 26000,
      mileageDisplay: '26.000 km',
      engine: 'Motor 1.0 Turbo Flex de 120 cv',
      engineShort: '1.0 Turbo Flex • 120 cv',
      transmission: 'Automático de 6 marchas',
      fuel: 'Flex',
      price: null,
      shortDescription:
        'SUV moderno, elegante e em estado de conservação impecável. Apenas 26.000 km rodados, com motor 1.0 Turbo de 120 cv e pacote completo.',
      verifiedDescription: [
        'SUV moderno, elegante e impecável! Apenas 26.000 km rodados, ideal para quem busca conforto, tecnologia, segurança e desempenho.',
        'Estado de conservação impecável. Uma excelente oportunidade para sair de SUV, com design moderno, motor turbo e um pacote completo de equipamentos.'
      ],
      images: [
        {
          src: 'catalogo/carro2/Captura%20de%20tela%202026-10-29%20133042.png',
          alt: 'Hyundai Creta Comfort 1.0 Turbo 2024/2025 cinza visto em ângulo dianteiro três quartos',
          caption: 'Vista lateral e dianteira — Hyundai Creta Comfort 1.0 Turbo 2024/2025',
          width: 587,
          height: 697
        },
        {
          src: 'catalogo/carro2/Captura%20de%20tela%202026-10-29%20133103.png',
          alt: 'Hyundai Creta Comfort 1.0 Turbo 2024/2025 cinza visto de frente',
          caption: 'Vista frontal — Hyundai Creta Comfort 1.0 Turbo 2024/2025',
          width: 572,
          height: 721
        }
      ],
      specGroups: [
        {
          title: 'Motorização e condução',
          items: [
            'Motor 1.0 Turbo Flex de 120 cv',
            'Câmbio automático de 6 marchas',
            'Direção elétrica',
            'Piloto automático e limitador de velocidade',
            'Sistema Start-Stop',
            'Volante multifuncional com regulagem de altura e profundidade'
          ]
        },
        {
          title: 'Conforto, conectividade e conveniência',
          items: [
            'Central multimídia touchscreen de 8”',
            'Espelhamento sem fio com Android Auto e Apple CarPlay',
            'Painel de instrumentos digital',
            'Chave presencial e partida por botão',
            'Ar-condicionado',
            'Rodas de liga leve aro 16”',
            'Banco do motorista com regulagem de altura',
            'Banco traseiro bipartido e rebatível',
            'Vidros elétricos nas quatro portas e travas elétricas',
            'Retrovisores com ajuste elétrico',
            'Faróis com acendimento automático e luzes diurnas em LED (DRL)',
            'Bluetooth, entradas USB, limpador e desembaçador traseiro'
          ]
        },
        {
          title: 'Segurança',
          items: [
            '6 airbags: frontais, laterais e de cortina',
            'Câmera de ré e sensor de estacionamento traseiro',
            'Controle de estabilidade e tração',
            'Freios ABS com distribuição eletrônica de frenagem',
            'Assistente de partida em rampas',
            'Monitoramento da pressão dos pneus',
            'Fixação ISOFIX para cadeirinhas infantis'
          ]
        }
      ]
    }
  ];

  const ICONS = {
    whatsapp:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M9.5 9.5c.3 1.8 1.7 3.2 3.5 3.5l1.2-.8c.2-.2.5-.2.8-.1l1.6.7c.3.1.4.4.4.7-.1 1-.9 1.6-1.9 1.6-3.6 0-6.6-3-6.6-6.6 0-1 .6-1.8 1.6-1.9.3 0 .6.1.7.4l.7 1.6c.1.3.1.6-.1.8l-.9 1.1z"/></svg>',
    arrowLeft:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>',
    chevronLeft:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
    chevronRight:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
    close:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    menu:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="17" y2="17"/></svg>',
    calendar:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
    gauge:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>',
    engine:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    check:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
    expand:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>',
    refresh:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>'
  };

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatCurrencyBRL(value) {
    if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) {
      return null;
    }
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value);
  }

  function getGeneralWhatsAppUrl() {
    const message =
      'Olá, Alan! Conheci a Automarcas Itaúna pelo site e gostaria de mais informações sobre os veículos disponíveis.';
    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  function getVehicleWhatsAppUrl(vehicle) {
    const vehicleName =
      vehicle && typeof vehicle === 'object'
        ? (vehicle.fullName || [vehicle.brand, vehicle.model].filter(Boolean).join(' ')).trim()
        : '';
    const message = vehicleName
      ? `Olá, Alan! Vi o ${vehicleName} no catálogo da Automarcas Itaúna e gostaria de saber mais informações sobre esse veículo. Ele ainda está disponível?`
      : 'Olá, Alan! Vi um veículo no catálogo da Automarcas Itaúna e gostaria de saber mais informações sobre ele. Ainda está disponível?';
    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  function getVehicleBySlug(slug) {
    if (!slug) return null;
    const clean = decodeURIComponent(String(slug)).trim().toLowerCase();
    return (
      VEHICLES.find((v) => v.slug.toLowerCase() === clean || v.id.toLowerCase() === clean) || null
    );
  }

  function renderVehicleCardHtml(vehicle) {
    const primaryImage = vehicle.images[0];
    const detailHref = `veiculo.html?slug=${encodeURIComponent(vehicle.slug)}`;
    const whatsappHref = getVehicleWhatsAppUrl(vehicle);
    const formattedPrice = formatCurrencyBRL(vehicle.price);

    return `
      <div class="vehicle-card-wrap">
        <article class="vehicle-card">
          <div class="vehicle-card__media">
            <a href="${detailHref}" class="vehicle-card__img-link" aria-label="Ver detalhes de ${escapeHtml(vehicle.fullName)}">
              <img
                src="${primaryImage.src}"
                alt="${escapeHtml(primaryImage.alt)}"
                class="vehicle-card__img"
                width="${primaryImage.width}"
                height="${primaryImage.height}"
                loading="lazy"
              />
            </a>
          </div>
          <div class="vehicle-card__body">
            <div class="vehicle-card__header">
              <div class="vehicle-card__badges">
                <span class="badge badge--dark">${escapeHtml(vehicle.category)}</span>
                <span class="badge badge--orange tabular-nums">${escapeHtml(vehicle.year)}</span>
              </div>
              <h3 class="vehicle-card__title">
                <a href="${detailHref}">${escapeHtml(vehicle.brand)} ${escapeHtml(vehicle.model)}</a>
              </h3>
              <p class="vehicle-card__version">${escapeHtml(vehicle.version)}</p>
            </div>
            <div class="vehicle-card__specs" aria-label="Especificações principais">
              <span class="spec-pill tabular-nums">${ICONS.calendar}<span>${escapeHtml(vehicle.year)}</span></span>
              <span class="spec-pill tabular-nums">${ICONS.gauge}<span>${escapeHtml(vehicle.mileageDisplay)}</span></span>
              <span class="spec-pill">${ICONS.engine}<span>${escapeHtml(vehicle.engineShort)}</span></span>
            </div>
            ${formattedPrice ? `<div class="vehicle-card__price tabular-nums">${escapeHtml(formattedPrice)}</div>` : ''}
            <div class="vehicle-card__actions">
              <a href="${detailHref}" class="btn btn--outline btn--sm"><span>Ver detalhes</span></a>
              <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">${ICONS.whatsapp}<span>Consultar pelo WhatsApp</span></a>
            </div>
          </div>
        </article>
      </div>
    `;
  }

  /* ==========================================================================
     INICIALIZAÇÃO AO CARREGAR O DOM
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Oculta a tela de carregamento imediatamente
    const loader = document.getElementById('initial-loader');
    if (loader) {
      requestAnimationFrame(() => {
        loader.classList.add('is-loaded');
      });
    }

    // 2. Menu Mobile Compacto
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('is-open');
        mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        mobileBtn.setAttribute(
          'aria-label',
          isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
        );
        mobileBtn.innerHTML = isOpen ? ICONS.close : ICONS.menu;
      });
    }

    // 3. Vitrine interativa no Hero da Home (index.html)
    const heroButtons = document.querySelectorAll('[data-hero-select]');
    const heroCardLink = document.getElementById('hero-featured-link');
    const heroCardImg = document.getElementById('hero-featured-img');
    const heroCardName = document.getElementById('hero-featured-name');
    const heroCardMeta = document.getElementById('hero-featured-meta');

    if (heroButtons.length > 0 && heroCardLink && heroCardImg) {
      heroButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.getAttribute('data-hero-select'));
          const vehicle = VEHICLES[idx];
          if (!vehicle) return;

          const mainImg = vehicle.images[0];
          heroCardLink.href = `veiculo.html?slug=${encodeURIComponent(vehicle.slug)}`;
          heroCardImg.src = mainImg.src;
          heroCardImg.alt = mainImg.alt;
          if (heroCardName) heroCardName.textContent = vehicle.fullName;
          if (heroCardMeta) {
            heroCardMeta.textContent = `${vehicle.year} • ${vehicle.mileageDisplay} • ${vehicle.engineShort}`;
          }

          heroButtons.forEach((b, i) => {
            const active = i === idx;
            b.classList.toggle('is-active', active);
            b.setAttribute('aria-pressed', active ? 'true' : 'false');
          });
        });
      });
    }

    // 4. Catálogo: Busca, Filtros e Ordenação (catalogo.html)
    const catalogResultsRegion = document.getElementById('catalog-results-region');
    if (catalogResultsRegion) {
      const catalogState = {
        query: '',
        category: 'all',
        brand: 'all',
        sortBy: 'relevance'
      };

      const searchInput = document.getElementById('catalog-search-input');
      const brandSelect = document.getElementById('catalog-brand-select');
      const sortSelect = document.getElementById('catalog-sort-select');
      const categoryChips = document.querySelectorAll('[data-category-chip]');

      function renderCatalogResults() {
        const q = catalogState.query.trim().toLowerCase();

        const filtered = VEHICLES.filter((v) => {
          if (catalogState.category !== 'all' && v.category !== catalogState.category) {
            return false;
          }
          if (catalogState.brand !== 'all' && v.brand !== catalogState.brand) {
            return false;
          }
          if (q) {
            const searchable = [
              v.brand,
              v.model,
              v.fullName,
              v.version,
              v.category,
              v.year,
              v.engine,
              v.fuel,
              ...(v.specGroups ? v.specGroups.flatMap((g) => g.items) : [])
            ]
              .filter(Boolean)
              .join(' ')
              .toLowerCase();
            if (!searchable.includes(q)) return false;
          }
          return true;
        });

        const sorted = [...filtered];
        if (catalogState.sortBy === 'mileage-asc') {
          sorted.sort((a, b) => (a.mileageKm ?? Infinity) - (b.mileageKm ?? Infinity));
        } else if (catalogState.sortBy === 'year-desc') {
          sorted.sort((a, b) => (b.yearSort ?? 0) - (a.yearSort ?? 0));
        }

        const hasFilters =
          catalogState.query.trim() !== '' ||
          catalogState.category !== 'all' ||
          catalogState.brand !== 'all' ||
          catalogState.sortBy !== 'relevance';

        const generalWa = getGeneralWhatsAppUrl();

        catalogResultsRegion.innerHTML = `
          <div class="catalog-toolbar">
            <div>
              <h2 class="catalog-results-heading">Veículos no estoque</h2>
              <p class="catalog-count tabular-nums" role="status" aria-live="polite">
                ${sorted.length === 1 ? '1 veículo encontrado' : `${sorted.length} veículos encontrados`}
              </p>
            </div>
            ${
              hasFilters
                ? `<button type="button" class="clear-filters-btn" data-action="clear-filters">
                    ${ICONS.refresh}
                    <span>Limpar filtros</span>
                  </button>`
                : ''
            }
          </div>
          ${
            sorted.length > 0
              ? `<div class="vehicles-grid">${sorted.map((v) => renderVehicleCardHtml(v)).join('')}</div>`
              : `<div class="empty-state" role="status">
                  <h2 class="empty-state__title">Nenhum veículo corresponde aos filtros selecionados</h2>
                  <p class="empty-state__text">
                    Tente buscar por outro termo, limpar os filtros ativos ou falar diretamente com o consultor Alan para verificar outras opções disponíveis na loja.
                  </p>
                  <div class="empty-state__actions">
                    <button type="button" class="btn btn--dark" data-action="clear-filters">
                      ${ICONS.refresh}
                      <span>Limpar filtros</span>
                    </button>
                    <a href="${generalWa}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
                      ${ICONS.whatsapp}
                      <span>Falar com consultor Alan</span>
                    </a>
                  </div>
                </div>`
          }
        `;

        categoryChips.forEach((chip) => {
          const val = chip.getAttribute('data-category-chip');
          chip.setAttribute('aria-pressed', val === catalogState.category ? 'true' : 'false');
        });
      }

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          catalogState.query = e.target.value;
          renderCatalogResults();
        });
      }

      if (brandSelect) {
        brandSelect.addEventListener('change', (e) => {
          catalogState.brand = e.target.value;
          renderCatalogResults();
        });
      }

      if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
          catalogState.sortBy = e.target.value;
          renderCatalogResults();
        });
      }

      categoryChips.forEach((chip) => {
        chip.addEventListener('click', () => {
          catalogState.category = chip.getAttribute('data-category-chip') || 'all';
          renderCatalogResults();
        });
      });

      catalogResultsRegion.addEventListener('click', (e) => {
        const clearBtn = e.target.closest('[data-action="clear-filters"]');
        if (clearBtn) {
          catalogState.query = '';
          catalogState.category = 'all';
          catalogState.brand = 'all';
          catalogState.sortBy = 'relevance';
          if (searchInput) searchInput.value = '';
          if (brandSelect) brandSelect.value = 'all';
          if (sortSelect) sortSelect.value = 'relevance';
          renderCatalogResults();
        }
      });
    }

    // 5. Página Individual de Detalhes do Veículo (veiculo.html?slug=...)
    const detailMount = document.getElementById('vehicle-detail-mount');
    if (detailMount) {
      const params = new URLSearchParams(window.location.search);
      const slugParam = params.get('slug') || VEHICLES[0].slug;
      const vehicle = getVehicleBySlug(slugParam);
      const generalWa = getGeneralWhatsAppUrl();

      if (!vehicle) {
        document.title = 'Veículo não encontrado — Automarcas Itaúna';
        detailMount.innerHTML = `
          <div class="empty-state">
            <h1 class="empty-state__title">Veículo não encontrado</h1>
            <p class="empty-state__text">
              O veículo que você procurou não foi localizado. Confira nosso catálogo atualizado ou fale com o consultor Alan.
            </p>
            <div class="empty-state__actions">
              <a href="catalogo.html" class="btn btn--dark">
                ${ICONS.arrowLeft}
                <span>Voltar ao catálogo</span>
              </a>
              <a href="${generalWa}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
                ${ICONS.whatsapp}
                <span>Falar com consultor</span>
              </a>
            </div>
          </div>
        `;
        return;
      }

      document.title = `${vehicle.fullName} (${vehicle.year}) — Automarcas Itaúna`;
      const images = vehicle.images || [];
      let activePhotoIdx = 0;
      const activeImage = images[0];
      const whatsappHref = getVehicleWhatsAppUrl(vehicle);
      const formattedPrice = formatCurrencyBRL(vehicle.price);

      const specSummaryItems = [
        vehicle.year ? { label: 'Ano', value: vehicle.year } : null,
        vehicle.mileageDisplay ? { label: 'Quilometragem', value: vehicle.mileageDisplay } : null,
        vehicle.category ? { label: 'Categoria', value: vehicle.category } : null,
        vehicle.fuel ? { label: 'Combustível', value: vehicle.fuel } : null,
        vehicle.engineShort ? { label: 'Motorização', value: vehicle.engineShort } : null,
        vehicle.transmission ? { label: 'Câmbio', value: vehicle.transmission } : null
      ].filter(Boolean);

      detailMount.innerHTML = `
        <div class="detail-back-bar">
          <a href="catalogo.html" class="back-link">
            ${ICONS.arrowLeft}
            <span>Voltar ao catálogo</span>
          </a>
        </div>

        <div class="detail-layout">
          <section class="gallery" aria-label="Galeria de fotos de ${escapeHtml(vehicle.fullName)}">
            <div class="gallery__stage">
              <img
                id="detail-main-img"
                src="${activeImage.src}"
                alt="${escapeHtml(activeImage.alt)}"
                class="gallery__main-img"
                width="${activeImage.width}"
                height="${activeImage.height}"
                fetchpriority="high"
              />
              ${
                images.length > 1
                  ? `<button type="button" class="gallery__nav-btn gallery__nav-btn--prev" data-gallery-step="-1" aria-label="Foto anterior">${ICONS.chevronLeft}</button>
                     <button type="button" class="gallery__nav-btn gallery__nav-btn--next" data-gallery-step="1" aria-label="Próxima foto">${ICONS.chevronRight}</button>`
                  : ''
              }
              <span class="gallery__counter tabular-nums" id="detail-gallery-counter">
                Foto 1 de ${images.length}
              </span>
              <button type="button" class="gallery__zoom-btn" id="open-lightbox-btn" aria-label="Ampliar fotografia do veículo">
                ${ICONS.expand}
                <span>Ampliar</span>
              </button>
            </div>

            ${
              images.length > 1
                ? `<div class="gallery__thumbs" role="tablist" aria-label="Miniaturas das fotos">
                    ${images
                      .map(
                        (img, idx) => `
                      <button
                        type="button"
                        role="tab"
                        class="gallery__thumb"
                        data-gallery-index="${idx}"
                        aria-selected="${idx === 0 ? 'true' : 'false'}"
                        aria-label="Ver foto ${idx + 1}: ${escapeHtml(img.caption || vehicle.fullName)}"
                      >
                        <img src="${img.src}" alt="${escapeHtml(img.alt)}" width="${img.width}" height="${img.height}" />
                      </button>`
                      )
                      .join('')}
                  </div>`
                : ''
            }
          </section>

          <aside class="detail-summary" aria-label="Resumo e contato para este veículo">
            <div class="detail-summary__badges">
              <span class="badge badge--dark">${escapeHtml(vehicle.category)}</span>
              <span class="badge badge--orange tabular-nums">${escapeHtml(vehicle.year)}</span>
            </div>
            <div>
              <h1 class="detail-summary__title">${escapeHtml(vehicle.fullName)}</h1>
              <p class="detail-summary__version">${escapeHtml(vehicle.version)}</p>
            </div>
            ${formattedPrice ? `<div class="vehicle-card__price tabular-nums">${escapeHtml(formattedPrice)}</div>` : ''}
            <div class="detail-specs-grid">
              ${specSummaryItems
                .map(
                  (item) => `
                <div class="detail-spec-box">
                  <span class="detail-spec-box__label">${escapeHtml(item.label)}</span>
                  <span class="detail-spec-box__value tabular-nums">${escapeHtml(item.value)}</span>
                </div>`
                )
                .join('')}
            </div>
            <div class="detail-summary__cta-box dark-surface">
              <p class="detail-summary__cta-note">
                Gostou do <strong>${escapeHtml(vehicle.fullName)}</strong>? Fale diretamente com o consultor ${escapeHtml(STORE_INFO.consultantName)} para confirmar disponibilidade e condições de negociação.
              </p>
              <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--full">
                ${ICONS.whatsapp}
                <span>Falar com consultor</span>
              </a>
            </div>
          </aside>
        </div>

        <div class="detail-content">
          <section class="detail-panel" aria-labelledby="desc-veiculo-heading">
            <h2 id="desc-veiculo-heading" class="detail-panel__title">Sobre este veículo</h2>
            <div class="detail-description">
              ${(vehicle.verifiedDescription || []).map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
            </div>
          </section>

          <section class="detail-panel" aria-labelledby="equipamentos-heading">
            <h2 id="equipamentos-heading" class="detail-panel__title">Ficha técnica e equipamentos verificados</h2>
            <div class="spec-groups">
              ${vehicle.specGroups
                .map(
                  (g) => `
                <div class="spec-group">
                  <h3 class="spec-group__title">${escapeHtml(g.title)}</h3>
                  <ul class="spec-list">
                    ${g.items.map((item) => `<li class="spec-list__item">${ICONS.check}<span>${escapeHtml(item)}</span></li>`).join('')}
                  </ul>
                </div>`
                )
                .join('')}
            </div>
          </section>
        </div>

        <dialog id="vehicle-lightbox" class="lightbox-dialog" aria-label="Visualização ampliada da foto">
          <div class="lightbox-dialog__header">
            <span class="lightbox-dialog__caption" id="lightbox-caption">
              ${escapeHtml(activeImage.caption || vehicle.fullName)}
            </span>
            <button type="button" class="lightbox-dialog__close" id="close-lightbox-btn" aria-label="Fechar visualização ampliada">
              ${ICONS.close}
            </button>
          </div>
          <img id="lightbox-img" src="${activeImage.src}" alt="${escapeHtml(activeImage.alt)}" class="lightbox-dialog__img" />
        </dialog>

        <div class="mobile-sticky-cta dark-surface" role="region" aria-label="Contato rápido sobre o veículo">
          <div class="mobile-sticky-cta__info">
            <div class="mobile-sticky-cta__title">${escapeHtml(vehicle.fullName)}</div>
            <div class="mobile-sticky-cta__sub tabular-nums">${escapeHtml(vehicle.year)} • ${escapeHtml(vehicle.mileageDisplay)}</div>
          </div>
          <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">
            ${ICONS.whatsapp}
            <span>Falar com consultor</span>
          </a>
        </div>
      `;

      const updatePhoto = (newIdx) => {
        const total = images.length;
        activePhotoIdx = ((newIdx % total) + total) % total;
        const imgObj = images[activePhotoIdx];
        const mainImg = document.getElementById('detail-main-img');
        const counter = document.getElementById('detail-gallery-counter');
        const lbImg = document.getElementById('lightbox-img');
        const lbCap = document.getElementById('lightbox-caption');

        if (mainImg && imgObj) {
          mainImg.src = imgObj.src;
          mainImg.alt = imgObj.alt;
        }
        if (counter) counter.textContent = `Foto ${activePhotoIdx + 1} de ${total}`;
        if (lbImg && imgObj) {
          lbImg.src = imgObj.src;
          lbImg.alt = imgObj.alt;
        }
        if (lbCap && imgObj) lbCap.textContent = imgObj.caption || vehicle.fullName;

        detailMount.querySelectorAll('[data-gallery-index]').forEach((btn) => {
          const i = Number(btn.getAttribute('data-gallery-index'));
          btn.setAttribute('aria-selected', i === activePhotoIdx ? 'true' : 'false');
        });
      };

      detailMount.querySelectorAll('[data-gallery-index]').forEach((btn) => {
        btn.addEventListener('click', () => {
          updatePhoto(Number(btn.getAttribute('data-gallery-index')));
        });
      });

      detailMount.querySelectorAll('[data-gallery-step]').forEach((btn) => {
        btn.addEventListener('click', () => {
          updatePhoto(activePhotoIdx + Number(btn.getAttribute('data-gallery-step')));
        });
      });

      const dialog = document.getElementById('vehicle-lightbox');
      const openBtn = document.getElementById('open-lightbox-btn');
      const closeBtn = document.getElementById('close-lightbox-btn');
      if (dialog && openBtn && typeof dialog.showModal === 'function') {
        openBtn.addEventListener('click', () => dialog.showModal());
        if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());
        dialog.addEventListener('click', (e) => {
          if (e.target === dialog) dialog.close();
        });
      }
    }
  });
})();

