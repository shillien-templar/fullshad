import {TabbedKanbanBoard} from "@/components/composites/productivity/tasks/tabbed-kanban-board"

export default function TabbedKanbanBoardPreview() {
    return (
        <div className="md:py-4">
            <div className="max-w-7xl mx-auto md:px-4">
                <TabbedKanbanBoard/>
            </div>
        </div>
    )
}