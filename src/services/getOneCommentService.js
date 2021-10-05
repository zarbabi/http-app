import http from "./httpService";

export function getOneComments(commentId) {
  return http.get(`/comments/${commentId}`);
}
