import React, { useState } from 'react';

interface ResearchItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  status: 'completed' | 'in-progress' | 'pending';
  date: string;
  icon: string;
}

const researchItems: ResearchItem[] = [
  {
    id: '1',
    title: 'Hermes Agent Self-Evolution',
    category: 'AI Self-Improvement',
    summary: 'Framework DSPy + GEPA para evolución de prompts y skills.',
    details: [
      'Genetic-Pareto Prompt Evolution (GEPA)',
      'Sin GPU — solo API calls (~2-10$ por ciclo)',
      'Itera sobre execution traces',
      'Fases: Skills → Tools → System Prompt → Code',
    ],
    status: 'completed',
    date: '2026-04-09',
    icon: '🧬',
  },
  {
    id: '2',
    title: 'Basic Memory - MCP Server',
    category: 'Memory Systems',
    summary: 'Markdown + vector search para AI agents. MCP-native.',
    details: [
      'Semantic vector search con FastEmbed',
      'Schema system para estructura',
      'Bidirectional wikilinks',
      'Local-first, zero cloud dependency',
    ],
    status: 'completed',
    date: '2026-04-09',
    icon: '💾',
  },
  {
    id: '3',
    title: 'ClawVault - AI Agent Memory',
    category: 'Memory Systems',
    summary: 'Observational memory con typed knowledge graph.',
    details: [
      'Observa conversaciones y extrae conocimiento',
      'BM25 + vector + neural reranker',
      'Auto-checkpoint y context death detection',
      'Compatible con OpenClaw',
    ],
    status: 'completed',
    date: '2026-04-09',
    icon: '🧠',
  },
  {
    id: '4',
    title: 'Tavily Research',
    category: 'Research Tools',
    summary: 'AI-powered deep research con citations.',
    details: [
      'Multi-source synthesis',
      'Citation tracking',
      '30-120s por query',
      'Modelos: mini, pro, auto',
    ],
    status: 'pending',
    date: 'Pendiente',
    icon: '🔍',
  },
  {
    id: '5',
    title: 'Deep Research Framework',
    category: 'Research Tools',
    summary: 'Enterprise-grade research con credibility scoring.',
    details: [
      '6 fases: SCOPE → PLAN → RETRIEVE → TRIANGULATE → SYNTHESIZE → PACKAGE',
      'Source credibility scoring',
      'HTML/PDF output (McKinsey style)',
      'Quality gates en cada fase',
    ],
    status: 'pending',
    date: 'Pendiente',
    icon: '📊',
  },
];

const categories = ['All', 'AI Self-Improvement', 'Memory Systems', 'Research Tools'];

export default function ResearchReports() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredItems = activeCategory === 'All'
    ? researchItems
    : researchItems.filter((item) => item.category === activeCategory);

  const statusColors = {
    completed: '#4ade80',
    'in-progress': '#fbbf24',
    pending: '#71717a',
  };

  const statusLabels = {
    completed: 'Completado',
    'in-progress': 'En Progreso',
    pending: 'Pendiente',
  };

  return (
    <div className="research-page">
      <header className="page-header">
        <h1>🔬 Research Reports</h1>
        <p className="page-subtitle">Investigaciones, herramientas y frameworks descubiertos</p>
      </header>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="research-stats">
        <div className="stat-item">
          <span className="stat-number" style={{ color: '#4ade80' }}>3</span>
          <span className="stat-label">Completados</span>
        </div>
        <div className="stat-item">
          <span className="stat-number" style={{ color: '#fbbf24' }}>0</span>
          <span className="stat-label">En Progreso</span>
        </div>
        <div className="stat-item">
          <span className="stat-number" style={{ color: '#71717a' }}>2</span>
          <span className="stat-label">Pendientes</span>
        </div>
      </div>

      {/* Research Grid */}
      <div className="research-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="research-card">
            <div className="card-header">
              <span className="card-icon">{item.icon}</span>
              <div className="card-meta">
                <span className="card-category">{item.category}</span>
                <span
                  className="card-status"
                  style={{ backgroundColor: statusColors[item.status] }}
                >
                  {statusLabels[item.status]}
                </span>
              </div>
            </div>
            
            <h3 className="card-title">{item.title}</h3>
            <p className="card-summary">{item.summary}</p>
            
            <button
              className="expand-btn"
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
            >
              {expandedId === item.id ? 'Ocultar detalles ↑' : 'Ver detalles ↓'}
            </button>
            
            {expandedId === item.id && (
              <div className="card-details">
                <h4>Detalles:</h4>
                <ul>
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="card-footer">
              <span className="card-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .research-page {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-top: 0.5rem;
        }

        .category-filter {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-secondary);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .filter-btn.active {
          background: var(--accent);
          color: #0a0a0f;
          border-color: var(--accent);
        }

        .research-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
          padding: 1rem 1.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .research-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .research-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .research-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .card-icon {
          font-size: 1.75rem;
        }

        .card-meta {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
        }

        .card-category {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent);
        }

        .card-status {
          font-size: 0.65rem;
          padding: 0.125rem 0.5rem;
          border-radius: 1rem;
          color: #0a0a0f;
          font-weight: 600;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .card-summary {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .expand-btn {
          background: none;
          border: none;
          color: var(--accent);
          font-size: 0.8rem;
          cursor: pointer;
          padding: 0;
          margin-bottom: 1rem;
        }

        .expand-btn:hover {
          text-decoration: underline;
        }

        .card-details {
          background: var(--bg-secondary);
          border-radius: 0.5rem;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .card-details h4 {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .card-details ul {
          margin: 0;
          padding-left: 1.25rem;
        }

        .card-details li {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .card-footer {
          border-top: 1px solid var(--border);
          padding-top: 0.75rem;
        }

        .card-date {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 600px) {
          .research-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .research-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
