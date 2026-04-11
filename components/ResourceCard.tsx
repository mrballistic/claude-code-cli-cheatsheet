import { ExternalLink } from 'lucide-react';
import CopyButton from './CopyButton';
import type { Resource } from '@/lib/constants';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="card group/card">
      <div className="flex items-start gap-4">
        <div className="flex-1 min-w-0">
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium mb-1 inline-flex items-center gap-2 transition-colors"
            style={{ color: 'var(--accent-primary)' }}
          >
            {resource.title}
            <ExternalLink
              size={14}
              className="shrink-0 transition-transform group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
              style={{ color: 'var(--text-tertiary)' }}
            />
          </a>
          <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
            {resource.description}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs break-all" style={{ color: 'var(--text-tertiary)' }}>
              {resource.url}
            </span>
            <CopyButton
              text={resource.url}
              size={12}
              className="opacity-0 group-hover/card:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
