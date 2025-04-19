import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useHabits } from '../hooks/useHabits';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export default function HabitList({ onReorder }) {
  const [user, loading] = useAuthState(auth);
  const { habits, loading: habitsLoading } = useHabits();
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = habits.findIndex(h => h.id === active.id);
      const newIndex = habits.findIndex(h => h.id === over.id);
      onReorder(oldIndex, newIndex);
    }
  };

  if (loading || habitsLoading) return <div>Loading habits...</div>;

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={habits} strategy={verticalListSortingStrategy}>
        {habits.map(habit => (
          <SortableHabit key={habit.id} habit={habit} />
        ))}
      </SortableContext>
    </DndContext>
  );
}
