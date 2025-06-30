import {CompactKanbanBoard} from "@/components/composites/productivity/tasks/compact-kanban-board"

export default function CompactKanbanBoardPreview() {
    return (
        <div className="md:py-4">
            <div className="max-w-7xl mx-auto md:px-4">
                <CompactKanbanBoard/>
            </div>
        </div>
    )
}