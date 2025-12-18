import AnimateCounter from '@/common/components/elements/AnimateCounter';
import Card from '@/common/components/elements/Card';

interface OverviewItemProps {
  label: string;
  value: string | number;
  unit?: string;
}

const OverviewItem = ({ label, value, unit = '' }: OverviewItemProps) => (
  <Card className='flex flex-col self-center rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-900'>
    <span className='text-sm dark:text-neutral-400'>{label}</span>
    <div className='text-xl font-medium text-green-600 lg:text-2xl'>
      {typeof value === 'number' ? (
        <AnimateCounter total={value} />
      ) : (
        <span>{value}</span>
      )}
      {unit && <span className='text-sm dark:text-neutral-400'> {unit}</span>}
    </div>
  </Card>
);

export default OverviewItem;