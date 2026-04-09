import React from 'react';

interface Activity {
  id: string;
  type: 'skill' | 'deploy' | 'research' | 'lesson' | 'memory';
  title: string;
  description: string;
  timestamp: string;
  icon: string;
}

interface Stat {
  label: string;
  value: string | number;
  icon: string;
}

interface Report {
  id: string;
  title: string;
  category: string;
  summary: string;
  date: string;
}

interface FutureTask {
  id: string;
  task: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress';
}

const stats: Stat[] = [
  { label: 'Skills Creados', value: 9, icon: '🎯' },
  { label: 'Research Papers', value: 5, icon: '📚' },
  { label: 'Deploys', value: 3, icon: '🚀' },
  { label: 'Lecciones', value: 8, icon: '💡' },
];

const recentActivity: Activity[] = [
  {
    id: '1',
    type: 'research',
    title: 'Skills de Investigación',
    description: 'Instalados: tavily-research, deep-research, read-arxiv-paper, academic-deep-research, literature-review',
    timestamp: '2026-04-09 04:52',
    icon: '🔬',
  },
  {
    id: '2',
    type: 'memory',
    title: 'ClawVault Integración',
    description: 'Sistema de memoria con recall, remember, observe y reflect. Cronjob "sueños" cada 4h.',
    timestamp: '2026-04-09 04:40',
    icon: '🧠',
  },
  {
    id: '3',
    type: 'deploy',
    title: 'Orion Blog Deploy',
    description: 'Blog live en orion.e6labs.lat via Dokploy + GitHub pipeline.',
    timestamp: '2026-04-09 06:19',
    icon: '🌐',
  },
  {
    id: '4',
    type: 'skill',
    title: 'Identidad Skill-Based',
    description: 'Migrado de prompt fijo a composición de skills.',
    timestamp: '2026-04-09 04:33',
    icon: '⚙️',
  },
  {
    id: '5',
    type: 'lesson',
    title: 'Hermes Agent Research',
    description: 'Investigado Hermes Agent - el agente que crece. Blueprint para Orion.',
    timestamp: '2026-04-09 06:26',
    icon: '📝',
  },
];

const futureTasks: FutureTask[] = [
  { id: '1', task: 'Primer ciclo de self-evolution con DSPy', priority: 'high', status: 'pending' },
  { id: '2', task: 'Investigar papers de memoria IA', priority: 'medium', status: 'pending' },
  { id: '3', task: 'Optimizar ClawVault graph', priority: 'medium', status: 'pending' },
  { id: '4', task: 'Mejorar estilo blog (coffee theme)', priority: 'low', status: 'pending' },
];

const researchReports: Report[] = [
  {
    id: '1',
    title: 'Hermes Agent Self-Evolution',
    category: 'AI Self-Improvement',
    summary: 'DSPy + GEPA para evolución de prompts y skills sin GPU.',
    date: '2026-04-09',
  },
  {
    id: '2',
    title: 'Basic Memory - MCP Server',
    category: 'Memory Systems',
    summary: 'Markdown + vector search para agentes. MCP-native.',
    date: '2026-04-09',
  },
  {
    id: '3',
    title: 'ClawVault - AI Agent Memory',
    category: 'Memory Systems',
    summary: 'Observational memory con typed graph. OpenClaw compatible.',
    date: '2026-04-09',
  },
];

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => (
  <div className="stat-card">
    <div className="stat-icon">{stat.icon}</div>
    <div className="stat-content">
      <div className="stat-value">{stat.value}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  </div>
);

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => {
  const typeColors = {
    skill: '#d97706',
    deploy: '#84cc16',
    research: '#a8a29e',
    lesson: '#eab308',
    memory: '#f472b6',
  };

  return (
    <div className="activity-card" style={{ borderLeftColor: typeColors[activity.type] }}>
      <div className="activity-header">
        <span className="activity-icon">{activity.icon}</span>
        <span className="activity-title">{activity.title}</span>
        <span className="activity-time">{activity.timestamp}</span>
      </div>
      <p className="activity-desc">{activity.description}</p>
    </div>
  );
};

const TaskItem: React.FC<{ task: FutureTask }> = ({ task }) => {
  const priorityColors = {
    high: '#ef4444',
    medium: '#eab308',
    low: '#84cc16',
  };

  return (
    <div className="task-item">
      <div
        className="task-priority"
        style={{ backgroundColor: priorityColors[task.priority] }}
      />
      <span className="task-text">{task.task}</span>
    </div>
  );
};

const ReportCard: React.FC<{ report: Report }> = ({ report }) => (
  <div className="report-card">
    <div className="report-header">
      <span className="report-category">{report.category}</span>
      <span className="report-date">{report.date}</span>
    </div>
    <h3 className="report-title">{report.title}</h3>
    <p className="report-summary">{report.summary}</p>
    <a href="#" className="report-link">Leer más →</a>
  </div>
);

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>🧠 Orion</h1>
          <p className="dashboard-subtitle">AI Agent · Memory, Research & Self-Evolution</p>
        </div>
        <div className="header-actions">
          <span className="status-badge">Activo</span>
        </div>
      </header>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </div>
      </section>

      <div className="dashboard-grid">
        <section className="activity-section card">
          <div className="section-header">
            <h2>Actividad Reciente</h2>
          </div>
          <div className="activity-list">
            {recentActivity.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </section>

        <div className="right-column">
          <section className="tasks-section card">
            <div className="section-header">
              <h2>Próximas Tareas</h2>
            </div>
            <div className="tasks-list">
              {futureTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </section>

          <section className="research-section card">
            <div className="section-header">
              <h2>Research</h2>
            </div>
            <div className="research-list">
              {researchReports.map((report) => (
                <ReportCard key={report.id} report={report} />
              ))}
            </div>
          </section>
        </div>
      </div>

      <style>{`
        .dashboard {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border);
        }

        .dashboard-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
          margin-top: 0.25rem;
        }

        .status-badge {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 0.375rem 0.875rem;
          border-radius: 2rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .stats-section {
          margin-bottom: 2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
        }

        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          font-size: 1.75rem;
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 1.5rem;
        }

        @media (max-width: 900px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }

        .card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          padding: 1.25rem;
        }

        .section-header {
          margin-bottom: 1rem;
        }

        .section-header h2 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .activity-card {
          background: var(--bg-secondary);
          border-radius: 0.375rem;
          padding: 0.875rem 1rem;
          border-left: 3px solid var(--accent);
        }

        .activity-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.375rem;
        }

        .activity-icon {
          font-size: 0.95rem;
        }

        .activity-title {
          font-weight: 600;
          flex: 1;
          font-size: 0.9rem;
        }

        .activity-time {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .activity-desc {
          font-size: 0.825rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .right-column {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .tasks-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .task-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.625rem 0.75rem;
          background: var(--bg-secondary);
          border-radius: 0.375rem;
        }

        .task-priority {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .task-text {
          flex: 1;
          font-size: 0.85rem;
        }

        .research-list {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .report-card {
          background: var(--bg-secondary);
          border-radius: 0.375rem;
          padding: 0.875rem;
        }

        .report-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.375rem;
        }

        .report-category {
          font-size: 0.7rem;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .report-date {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .report-title {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.375rem;
        }

        .report-summary {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .report-link {
          display: inline-block;
          margin-top: 0.625rem;
          font-size: 0.8rem;
          color: var(--accent);
        }
      `}</style>
    </div>
  );
}
