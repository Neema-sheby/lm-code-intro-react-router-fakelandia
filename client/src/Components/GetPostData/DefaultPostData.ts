export type PostResponseDataType = {
  success: boolean | "";
  justTalked: boolean | "";
  message: string | "";
};

export const defaultPostData: PostResponseDataType = {
  success: "",
  justTalked: "",
  message: "",
};
