import React, { useState, useEffect } from 'react';

// Types
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
  change?: string;
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

// Sample data - in production this would come from API/JSON
const stats: Stat[] = [
  { label: 'Skills Creados', value: 9, icon: '🎯' },
  { label: 'Research Papers', value: 5, icon: '📚' },
  { label: 'Deploys', value: 2, icon: '🚀' },
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
    title: 'Demo HTML Deploy',
    description: 'Primer deploy via Dokploy API. nginx:alpine con dominio this-es-demo.e6labs.lat',
    timestamp: '2026-04-09 04:51',
    icon: '🌐',
  },
  {
    id: '4',
    type: 'skill',
    title: 'Identidad Skill-Based',
    description: 'Migrado de prompt fijo a composición de skills. metacognition, self-evolution, docker-deploy, etc.',
    timestamp: '2026-04-09 04:33',
    icon: '⚙️',
  },
  {
    id: '5',
    type: 'lesson',
    title: 'Session Retrospective',
    description: 'Documentado qué funcionó y qué no. Lecciones para próxima sesión.',
    timestamp: '2026-04-09 05:32',
    icon: '📝',
  },
];

const futureTasks: FutureTask[] = [
  { id: '1', task: 'Fix demo-html con Docker Hub credentials', priority: 'high', status: 'pending' },
  { id: '2', task: 'Instalar Tavily CLI y configurar API key', priority: 'high', status: 'pending' },
  { id: '3', task: 'Investigar primer paper de memoria IA', priority: 'medium', status: 'pending' },
  { id: '4', task: 'Primer ciclo de self-evolution con DSPy', priority: 'medium', status: 'pending' },
  { id: '5', task: 'Conectar git repo a Dokploy', priority: 'low', status: 'pending' },
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

// Components
const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => (
  <div className="stat-card">
    <div className="stat-icon">{stat.icon}</div>
    <div className="stat-content">
      <div className="stat-value">{stat.value}</div>
      <div className="stat-label">{stat.label}</div>
      {stat.change && <div className="stat-change">{stat.change}</div>}
    </div>
  </div>
);

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => {
  const typeColors = {
    skill: '#60a5fa',
    deploy: '#4ade80',
    research: '#a78bfa',
    lesson: '#fbbf24',
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
    high: '#f87171',
    medium: '#fbbf24',
    low: '#4ade80',
  };

  return (
    <div className="task-item">
      <div
        className="task-priority"
        style={{ backgroundColor: priorityColors[task.priority] }}
      />
      <span className="task-text">{task.task}</span>
      {task.status === 'in-progress' && (
        <span className="task-status">En progreso</span>
      )}
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

// Main Dashboard
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'recent' | 'future' | 'research'>('recent');

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>🧠 Orion Dashboard</h1>
          <p className="dashboard-subtitle">AI Agent · Memory, Research & Self-Evolution</p>
        </div>
        <div className="header-actions">
          <span className="status-badge">
            <span className="status-dot"></span>
            Activo
          </span>
        </div>
      </header>

      {/* Stats Grid */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <div className="dashboard-grid">
        {/* Activity Feed */}
        <section className="activity-section card">
          <div className="section-header">
            <h2>📡 Actividad Reciente</h2>
          </div>
          <div className="activity-list">
            {recentActivity.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </section>

        {/* Right Column */}
        <div className="right-column">
          {/* Future Tasks */}
          <section className="tasks-section card">
            <div className="section-header">
              <h2>📋 Próximas Tareas</h2>
            </div>
            <div className="tasks-list">
              {futureTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </section>

          {/* Quick Research */}
          <section className="research-section card">
            <div className="section-header">
              <h2>🔬 Research Reports</h2>
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
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .dashboard-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(74, 222, 128, 0.1);
          border: 1px solid rgba(74, 222, 128, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #4ade80;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .stats-section {
          margin-bottom: 2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .stat-icon {
          font-size: 2rem;
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
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
          border-radius: 0.75rem;
          padding: 1.5rem;
        }

        .section-header {
          margin-bottom: 1rem;
        }

        .section-header h2 {
          font-size: 1.125rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .activity-card {
          background: var(--bg-secondary);
          border-radius: 0.5rem;
          padding: 1rem;
          border-left: 3px solid var(--accent);
        }

        .activity-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .activity-icon {
          font-size: 1rem;
        }

        .activity-title {
          font-weight: 600;
          flex: 1;
        }

        .activity-time {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .activity-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .right-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
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
          padding: 0.75rem;
          background: var(--bg-secondary);
          border-radius: 0.5rem;
        }

        .task-priority {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .task-text {
          flex: 1;
          font-size: 0.875rem;
        }

        .task-status {
          font-size: 0.75rem;
          background: rgba(96, 165, 250, 0.2);
          color: var(--accent);
          padding: 0.125rem 0.5rem;
          border-radius: 1rem;
        }

        .research-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .report-card {
          background: var(--bg-secondary);
          border-radius: 0.5rem;
          padding: 1rem;
        }

        .report-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .report-category {
          font-size: 0.75rem;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .report-date {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .report-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .report-summary {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .report-link {
          display: inline-block;
          margin-top: 0.75rem;
          font-size: 0.8rem;
          color: var(--accent);
        }
      `}</style>
    </div>
  );
}
