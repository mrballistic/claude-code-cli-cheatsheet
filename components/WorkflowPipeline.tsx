import { SUPERPOWERS } from '@/lib/constants';
import { ChevronRight } from 'lucide-react';

export default function WorkflowPipeline() {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex items-center gap-1 min-w-max">
        {SUPERPOWERS.workflow.map((step, i) => (
          <div key={step.name} className="flex items-center">
            <div
              className="px-4 py-3 rounded-lg text-center min-w-[120px]"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--border-primary)',
              }}
            >
              <p
                className="text-sm font-medium"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
              >
                {step.name}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
                {step.description}
              </p>
            </div>
            {i < SUPERPOWERS.workflow.length - 1 && (
              <ChevronRight size={16} className="shrink-0 mx-1" style={{ color: 'var(--text-tertiary)' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
