"use client"

import { useState } from "react"
import { MessageSquare, Send } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Post {
  title: string
  content: string
  timestamp: string
}

export default function Forum() {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "İlk Efes deneyimim",
      content: "Dün gece Efes IPA denedim ve harikaydı!",
      timestamp: "2023-07-10 14:30",
    },
    {
      title: "Bira ve yemek eşleştirme başarısı",
      content: "Yapay zeka önerisini takip ettim ve tam yerindeydi!",
      timestamp: "2023-07-09 18:45",
    },
  ])
  const [newTitle, setNewTitle] = useState("")
  const [newPost, setNewPost] = useState("")

  const addPost = () => {
    if (newPost.trim() === "" || newTitle.trim() === "") return

    const newPostObj: Post = {
      title: newTitle,
      content: newPost,
      timestamp: new Date().toLocaleString(),
    }

    setPosts([newPostObj, ...posts])
    setNewTitle("")
    setNewPost("")
  }

  return (
    <section className="mb-8 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#1B3F8B]">Anonim Forum</h2>
      <div className="mb-6">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Başlık ekleyin..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="flex-grow"
          />
          <Input
            type="text"
            placeholder="Efes deneyiminizi paylaşın..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={addPost} className="bg-[#00A3E0] hover:bg-[#1B3F8B] text-white">
            <Send className="mr-2" />
            Paylaş
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <Card key={index} className="bg-gray-50">
            <CardHeader>
              <CardTitle className="flex items-center text-[#1B3F8B]">
                <MessageSquare className="mr-2" /> {post.title}
              </CardTitle>
              <CardDescription>{post.timestamp}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}