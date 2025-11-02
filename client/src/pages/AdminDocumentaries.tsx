import { useState } from "react";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useLocation } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DocumentaryForm } from "@/components/DocumentaryForm";
import natureThumbnail from "@assets/generated_images/Nature_documentary_thumbnail_landscape_a133d6bc.png";

const mockDocumentaries = [
  {
    id: "1",
    title: "Planet Earth: Wonders of Nature",
    director: "David Attenborough",
    year: 2023,
    duration: 52,
    categories: ["Science"],
    status: "Published",
    thumbnail: natureThumbnail,
  },
];

export default function AdminDocumentaries() {
  const [, setLocation] = useLocation();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar onLogout={() => setLocation("/")} />

      <main className="flex-1 overflow-auto">
        <div className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Documentaries</h1>
              <p className="text-muted-foreground">
                Manage your documentary collection
              </p>
            </div>
            <Button onClick={() => setIsFormOpen(true)} data-testid="button-add-documentary">
              <Plus className="w-4 h-4 mr-2" />
              Add Documentary
            </Button>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-semibold">Thumbnail</th>
                  <th className="text-left p-4 font-semibold">Title</th>
                  <th className="text-left p-4 font-semibold">Director</th>
                  <th className="text-left p-4 font-semibold">Year</th>
                  <th className="text-left p-4 font-semibold">Duration</th>
                  <th className="text-left p-4 font-semibold">Status</th>
                  <th className="text-left p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockDocumentaries.map((doc) => (
                  <tr key={doc.id} className="border-t border-border hover-elevate">
                    <td className="p-4">
                      <img
                        src={doc.thumbnail}
                        alt={doc.title}
                        className="w-20 aspect-video object-cover rounded"
                      />
                    </td>
                    <td className="p-4 font-medium">{doc.title}</td>
                    <td className="p-4 text-muted-foreground">{doc.director}</td>
                    <td className="p-4 text-muted-foreground">{doc.year}</td>
                    <td className="p-4 text-muted-foreground">{doc.duration}m</td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-500/10 text-green-700 dark:text-green-400">
                        {doc.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          data-testid="button-edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-destructive hover:text-destructive"
                          data-testid="button-delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Documentary</DialogTitle>
          </DialogHeader>
          <DocumentaryForm
            onSubmit={(data) => {
              console.log("Documentary created:", data);
              setIsFormOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
