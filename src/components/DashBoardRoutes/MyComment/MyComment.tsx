"use client";

import { useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
import img from "@/assets/profile.png";
import Image from "next/image";

interface Comment {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  shortComment: string;
}

export default function MyComment() {
  const comments: Comment[] = [
    {
      id: 1,
      name: "Emine Demir",
      role: "Event Manager",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4,
      shortComment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text... See More",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 2,
      name: "Ahmet Yılmaz",
      role: "Event Manager",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4,
      shortComment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text... See More",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 3,
      name: "Mustafa Kılıç",
      role: "Event Manager",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4,
      shortComment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text... See More",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 4,
      name: "Fatma Özkan",
      role: "Event Manager",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4,
      shortComment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text... See More",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 5,
      name: "Murat Şahin",
      role: "Event Manager",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4,
      shortComment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text... See More",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];

  const [expandedComments, setExpandedComments] = useState<number[]>([]);

  

  const handleAdd = (commentId: number) => {
    console.log(`Add comment ${commentId}`);
  };

  const handleDelete = (commentId: number) => {
    console.log(`Delete comment ${commentId}`);
  };

  const toggleExpanded = (commentId: number) => {
    setExpandedComments((prev) =>
      prev.includes(commentId)
        ? prev.filter((id) => id !== commentId)
        : [...prev, commentId]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-[#F6339A] fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className=" p-4">
      {/* Header */}
      <div className="bg-white  px-4 py-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          My Comments
        </h1>
      </div>

      {/* Comments List */}
      <div className="px-4 py-6 space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm"
          >
            <div className="flex space-x-4">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <Image
                  src={img || "/placeholder.svg"}
                  //   src={comment.avatar || "/placeholder.svg"}
                  alt={comment.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>

              {/* Comment Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {comment.name}
                    </h3>
                    <p className="text-sm text-gray-500">{comment.role}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-5">
                    <button
                      onClick={() => handleAdd(comment.id)}
                      className="w-24 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium text-sm"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => handleDelete(comment.id)}
                      className="w-24 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-colors font-medium text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center  mb-3">
                  {renderStars(comment.rating)}
                </div>

                {/* Comment Text */}
                <div className="text-gray-700 text-sm leading-relaxed">
                  <p>
                    {expandedComments.includes(comment.id) ? (
                      <>
                        {comment.comment}
                        <button
                          onClick={() => toggleExpanded(comment.id)}
                          className="text-pink-500 hover:text-pink-600 ml-1 font-medium"
                        >
                          See Less
                        </button>
                      </>
                    ) : (
                      <>
                        {comment.shortComment.replace("... See More", "...")}
                        <button
                          onClick={() => toggleExpanded(comment.id)}
                          className="text-pink-500 hover:text-pink-600 ml-1 font-medium"
                        >
                          See More
                        </button>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
