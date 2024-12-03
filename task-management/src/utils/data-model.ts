import { TBoard } from "../types/board.type";

export const dataTemporaly: Array<TBoard> = [
    {
      id: 1,
      name: "Platform Lunch",
      states: [
        {
          id: 1,
          name: "To do",
          color: "#9BC1BC",
          tasks: [
            {
              id: 1,
              name: "Build UI for onboarding flow",
              subtasks: [
                {
                  id: 1,
                  name: "Research competitor prices and business model",
                  completed: true,
                },
                {
                  id: 2,
                  name: "Outline a business model that works for our solution",
                  completed: true,
                },
                {
                  id: 3,
                  name: "Talk to potential customers about out proposed solution",
                  completed: false,
                },
              ],
            },
            {
              id: 2,
              name: "Add account management endpoints",
              subtasks: [
                {
                  id: 1,
                  name: "Upgrade plan",
                  completed: false,
                },
                {
                  id: 2,
                  name: "Cancel plan",
                  completed: false,
                },
                {
                  id: 3,
                  name: "Update payment method",
                  completed: false,
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Doing",
          color: "#F4F1BB",
          tasks: [
            {
              id: 2,
              name: "Design settings and search pages",
              subtasks: [
                {
                  id: 4,
                  name: "Design settings page",
                  completed: true,
                },
                {
                  id: 5,
                  name: "Design search page",
                  completed: false,
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: "Done",
          color: "#F4F1BB",
          tasks: []
        }
      ],
    },
    {
      id: 2,
      name: "Marketing Plan",
      states: [],
    },
  ];