// ========================================
// TRANSLATIONS FOR DEMAND FORECAST CAROUSEL
// Dictionnaire FR/EN
// ========================================

const carouselTranslations = {
  fr: {
    carousel: {
      // Project Card
      clickExplore: "Cliquer pour explorer",
      projectTitle: "Tableau de Bord Demand Forecast",
      projectDescription: "Solution de prévision complète avec Power Query, Power Pivot & DAX. 96% de précision, MAPE 5%, analyse ABC, ajustement saisonnier, et reporting S&OP interactif.",
      tagForecasting: "Prévision",
      viewProject: "Voir le Projet Complet",
      
      // General
      tech: "Tech :",
      
      // Slide 1: Dashboard
      slide1: {
        title: "Tableau de Bord Demand Forecast",
        subtitle: "Reporting S&OP Interactif",
        intro: "Tableau de bord complet comportant :",
        feature1: "4 KPIs avec mise en forme conditionnelle (Précision 96%, MAPE 5%, Biais 5%)",
        feature2: "Comparaison Prévisions vs Réalisé (Jan-Nov 2025)",
        feature3: "Analyse ABC avec graphique de Pareto",
        feature4: "Prévisions par Catégorie (Ventes vs Prévisions)",
        feature5: "Suivi de variance mensuelle avec code couleur",
        feature6: "Analyse Top 5 Meilleurs/Moins performants"
      },
      
      // Slide 2: Parameters
      slide2: {
        title: "Tableau de Configuration",
        subtitle: "Paramètres & Réglages Dynamiques",
        intro: "Système de configuration centralisé :",
        feature1: "<strong>Période de Prévision :</strong> Sélection de date glissante (déc-25)",
        feature2: "<strong>Sélection de Méthode :</strong> Auto ou Manuel (Moyenne Mobile, Moyenne Pondérée, Lissage Exponentiel, Saisonnier)",
        feature3: "<strong>Indices Saisonniers :</strong> Tableau 12 mois (0,6 à 3,5 pour le pic de Noël)",
        feature4: "<strong>Classification ABC/XYZ :</strong> Seuils de chiffre d'affaires & CV",
        feature5: "<strong>Objectifs KPI :</strong> MAPE <15%, Biais ±5%, Précision >85%",
        highlight: "Tous les calculs se mettent à jour dynamiquement selon ces paramètres",
        tech: "Tableaux Excel, Validation de données, Plages nommées"
      },
      
      // Slide 3: Power Query
      slide3: {
        title: "Pipeline ETL Power Query",
        subtitle: "Transformation & Nettoyage des Données",
        intro: "7 requêtes de transformation :",
        feature1: "<strong>Products_Clean :</strong> Données maître produits avec catégories",
        feature2: "<strong>Sales_Transform :</strong> 480 transactions de ventes nettoyées & formatées",
        feature3: "<strong>ABC_Analysis :</strong> Logique Pareto avec calcul de % cumulé",
        feature4: "<strong>Lead_Time_Category :</strong> Logique de classification",
        feature5: "<strong>Price_Category :</strong> Segmentation par gammes de prix",
        feature6: "<strong>Forecast_Metrics :</strong> KPIs agrégés par produit",
        highlight: "Toutes les requêtes utilisent le langage M pour une performance optimale",
        tech: "Power Query M, Table.Buffer, Table.Group, fonctions List"
      },
      
      // Slide 4: Forecast Engine
      slide4: {
        title: "Moteur de Calcul des Prévisions",
        subtitle: "Logique de Prévision Multi-Méthodes",
        intro: "Plusieurs méthodes de prévision implémentées :",
        feature1: "<strong>Moyenne Mobile (3M, 6M) :</strong> Calcul de tendance simple",
        feature2: "<strong>Moyenne Pondérée :</strong> Périodes récentes ont un poids plus élevé (0,5/0,3/0,2)",
        feature3: "<strong>Lissage Exponentiel :</strong> Alpha 0,3 pour le lissage",
        feature4: "<strong>Ajustement Saisonnier :</strong> Indices mensuels appliqués (3,5x pour Décembre)",
        selection: "Sélection dynamique de méthode :",
        auto: "Mode Auto : Sélectionne \"Saisonnier\" si indice ≥1,5, sinon \"Moyenne_Mobile\"",
        manual: "Mode Manuel : L'utilisateur spécifie la méthode dans les paramètres",
        highlight: "Les 20 produits calculés avec stock de sécurité & points de commande",
        tech: "Formules Excel (MOYENNE.SI, RECHERCHEV, SI), locale française"
      },
      
      // Slide 5: Forecast Summary
      slide5: {
        title: "Prévisions Glissantes 12 Mois",
        subtitle: "Détail Mensuel & Commentaires",
        intro: "Sortie complète des prévisions :",
        feature1: "<strong>20 SKUs</strong> répartis sur 5 catégories",
        feature2: "<strong>12 mois</strong> de prévisions (M0 à M10+)",
        feature3: "<strong>En-têtes dynamiques :</strong> Les mois se mettent à jour automatiquement selon le paramètre période de prévision",
        feature4: "<strong>Basé sur formules :</strong> RECHERCHEV récupère les indices saisonniers depuis les paramètres",
        feature5: "<strong>Suivi de commentaires :</strong> Drapeaux \"Meilleur vendeur Noël\" pour produits clés",
        feature6: "<strong>Lignes totaux :</strong> 19 700 unités historique (Déc-24), 20 721 prévision (Déc-25)",
        highlight: "Intégré avec FORECAST_ENGINE pour calcul automatique",
        tech: "Tableaux Excel, Références structurées, fonctions DATE"
      },
      
      // Slide 6: Power Pivot
      slide6: {
        title: "Modèle de Données Power Pivot",
        subtitle: "Mesures DAX & Colonnes Calculées",
        intro: "Architecture du modèle de données :",
        feature1: "<strong>Table Fcst_Hist :</strong> 220 lignes (11 mois × 20 produits)",
        feature2: "<strong>Relations :</strong> Période, SKU, Produit, Catégorie",
        feature3: "<strong>Colonne Calculée DAX :</strong> Variance Mensuelle %",
        feature4: "<strong>Tableau Croisé Dynamique :</strong> Agrégation mensuelle avec variance %",
        results: "Résultats clés :",
        result1: "Jan-Sept : variance 2-4% (excellent)",
        result2: "Oct : variance 5% (bon)",
        result3: "Nov : variance 10% (acceptable pour la saisonnalité de Noël)",
        highlight: "Alimente le graphique \"Variance de Prévision Mensuelle\" dans le tableau de bord",
        tech: "Power Pivot, DAX, fonction DIVIDE, Tableaux Croisés Dynamiques"
      },
      
      // Footer
      footer: {
        title: "📊 Tableau de Bord Demand Forecast",
        subtitle: "Solution Excel complète de prévision | 96% Précision | 5% MAPE",
        button: "📥 Demander le Fichier Complet"
      }
    }
  },
  
  en: {
    carousel: {
      // Project Card
      clickExplore: "Click to explore",
      projectTitle: "Demand Forecast Dashboard",
      projectDescription: "End-to-end forecasting solution with Power Query, Power Pivot & DAX. 96% accuracy, 5% MAPE, ABC Analysis, seasonal adjustment, and interactive S&OP reporting.",
      tagForecasting: "Forecasting",
      viewProject: "View Full Project",
      
      // General
      tech: "Tech:",
      
      // Slide 1: Dashboard
      slide1: {
        title: "Demand Forecast Dashboard",
        subtitle: "Interactive S&OP Reporting",
        intro: "Complete dashboard featuring:",
        feature1: "4 KPIs with conditional formatting (Accuracy 96%, MAPE 5%, Bias 5%)",
        feature2: "Forecast vs Actual comparison (Jan-Nov 2025)",
        feature3: "ABC Analysis with Pareto chart",
        feature4: "Forecast by Category (Sales vs Forecast)",
        feature5: "Monthly variance tracking with color coding",
        feature6: "Top 5 Best/Worst performers analysis"
      },
      
      // Slide 2: Parameters
      slide2: {
        title: "Configuration Dashboard",
        subtitle: "Dynamic Parameters & Settings",
        intro: "Centralized configuration system:",
        feature1: "<strong>Forecast Period:</strong> Rolling date selection (Dec-25)",
        feature2: "<strong>Method Selection:</strong> Auto or Manual (Moving Avg, Weighted MA, Exp Smoothing, Seasonal)",
        feature3: "<strong>Seasonal Indices:</strong> 12-month table (0.6 to 3.5 for Christmas peak)",
        feature4: "<strong>ABC/XYZ Classification:</strong> Revenue & CV thresholds",
        feature5: "<strong>KPI Targets:</strong> MAPE <15%, Bias ±5%, Accuracy >85%",
        highlight: "All calculations update dynamically based on these parameters",
        tech: "Excel Tables, Data Validation, Named Ranges"
      },
      
      // Slide 3: Power Query
      slide3: {
        title: "Power Query ETL Pipeline",
        subtitle: "Data Transformation & Cleansing",
        intro: "7 transformation queries:",
        feature1: "<strong>Products_Clean:</strong> Product master data with categories",
        feature2: "<strong>Sales_Transform:</strong> 480 sales transactions cleaned & formatted",
        feature3: "<strong>ABC_Analysis:</strong> Pareto logic with cumulative % calculation",
        feature4: "<strong>Lead_Time_Category:</strong> Classification logic",
        feature5: "<strong>Price_Category:</strong> Segmentation by price ranges",
        feature6: "<strong>Forecast_Metrics:</strong> Aggregated KPIs per product",
        highlight: "All queries use M language for optimal performance",
        tech: "Power Query M, Table.Buffer, Table.Group, List functions"
      },
      
      // Slide 4: Forecast Engine
      slide4: {
        title: "Forecast Calculation Engine",
        subtitle: "Multi-Method Forecasting Logic",
        intro: "Multiple forecasting methods implemented:",
        feature1: "<strong>Moving Average (3M, 6M):</strong> Simple trend calculation",
        feature2: "<strong>Weighted MA:</strong> Recent periods have higher weight (0.5/0.3/0.2)",
        feature3: "<strong>Exponential Smoothing:</strong> Alpha 0.3 for smoothing",
        feature4: "<strong>Seasonal Adjustment:</strong> Monthly indices applied (3.5x for December)",
        selection: "Dynamic method selection:",
        auto: "Auto mode: Selects \"Seasonal\" if index ≥1.5, otherwise \"Moving_Avg\"",
        manual: "Manual mode: User specifies method in parameters",
        highlight: "All 20 products calculated with safety stock & reorder points",
        tech: "Excel Formulas (MOYENNE.SI, RECHERCHEV, SI), French locale"
      },
      
      // Slide 5: Forecast Summary
      slide5: {
        title: "12-Month Rolling Forecast",
        subtitle: "Monthly Breakdown & Comments",
        intro: "Complete forecast output:",
        feature1: "<strong>20 SKUs</strong> across 5 categories",
        feature2: "<strong>12 months</strong> of forecast (M0 to M10+)",
        feature3: "<strong>Dynamic headers:</strong> Months auto-update based on forecast period parameter",
        feature4: "<strong>Formula-driven:</strong> RECHERCHEV pulls seasonal indices from parameters",
        feature5: "<strong>Comment tracking:</strong> \"Christmas best seller\" flags for key products",
        feature6: "<strong>Total rows:</strong> 19,700 units historical (Dec-24), 20,721 forecast (Dec-25)",
        highlight: "Integrated with FORECAST_ENGINE for automatic calculation",
        tech: "Excel Tables, Structured References, DATE functions"
      },
      
      // Slide 6: Power Pivot
      slide6: {
        title: "Power Pivot Data Model",
        subtitle: "DAX Measures & Calculated Columns",
        intro: "Data model architecture:",
        feature1: "<strong>Fcst_Hist table:</strong> 220 rows (11 months × 20 products)",
        feature2: "<strong>Relationships:</strong> Period, SKU, Product, Category",
        feature3: "<strong>DAX Calculated Column:</strong> Monthly Variance %",
        feature4: "<strong>Pivot Table:</strong> Monthly aggregation with variance %",
        results: "Key results:",
        result1: "Jan-Sept: 2-4% variance (excellent)",
        result2: "Oct: 5% variance (good)",
        result3: "Nov: 10% variance (acceptable for Christmas seasonality)",
        highlight: "Powers the \"Monthly Forecast Variance\" chart in dashboard",
        tech: "Power Pivot, DAX, DIVIDE function, Pivot Tables"
      },
      
      // Footer
      footer: {
        title: "📊 Demand Forecast Dashboard",
        subtitle: "End-to-end Excel forecasting solution | 96% Accuracy | 5% MAPE",
        button: "📥 Request Full File"
      }
    }
  }
};

// ========================================
// FONCTION POUR APPLIQUER LES TRADUCTIONS
// Compatible avec ton système translation.js
// ========================================

function translateCarousel(lang) {
  const translations = carouselTranslations[lang] || carouselTranslations['fr'];
  
  // Traduire tous les éléments avec data-translate
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = getNestedTranslation(translations, key);
    
    if (translation) {
      // Vérifier si la traduction contient du HTML
      if (translation.includes('<strong>') || translation.includes('<code>')) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
}

// Fonction helper pour accéder aux traductions imbriquées
function getNestedTranslation(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// ========================================
// INTÉGRATION AVEC TON SYSTÈME EXISTANT
// ========================================

// Option 1: Écouter le changement de langue (si tu as un event)
document.addEventListener('languageChanged', (event) => {
  translateCarousel(event.detail.language);
});

// Option 2: Appeler manuellement quand l'utilisateur change de langue
// Ajoute cet appel dans ta fonction de changement de langue existante
function changeCarouselLanguage(lang) {
  // ... ton code existant ...
  translateCarousel(lang);
}

// Option 3: Détecter automatiquement la langue au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  // Détecter la langue active (ajuste selon ton système)
  const currentLang = document.documentElement.lang || 
                      localStorage.getItem('language') || 
                      'fr';
  translateCarousel(currentLang);
});

// ========================================
// EXPORTER POUR UTILISATION
// ========================================

// Si tu utilises des modules ES6
// export { carouselTranslations, translateCarousel };

// Sinon, rendre disponible globalement
if (typeof window !== 'undefined') {
  window.carouselTranslations = carouselTranslations;
  window.translateCarousel = translateCarousel;
}

console.log('✅ Carousel translations loaded (FR/EN)');
window.changeCarouselLanguage = changeCarouselLanguage;

