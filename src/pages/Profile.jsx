import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { changeProfile } from "../api/auth";
import useCloudinaryUrl from "../hooks/useCloudinaryUrl";
import { Image } from "cloudinary-react";

function Profile() {
  // 클라우디너리에 이미지 업로드하는 코드
  const cloudinaryUrl = useCloudinaryUrl();
  const [imageSelected, setImageSelected] = useState(null);
  const [publicId, setPublicId] = useState(null);

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "tuwroqix");

    return axios
      .post("https://api.cloudinary.com/v1_1/dsav9fenu/image/upload", formData)
      .then((response) => {
        setPublicId(response.data.public_id);
        return response.data.url;
      });
  };

  // react-query
  const queryClient = useQueryClient();
  const profileMutation = useMutation(changeProfile, {});

  // 프로필사진 변경하는 요청
  const handleSubmitButtonClick = async (event) => {
    try {
      const imageUrl = await uploadImage();
      profileMutation.mutate(imageUrl);
      setImageSelected(null);
      setPublicId(null);
      cloudinaryUrl.cloudinaryUrl = "";
    } catch (error) {
      alert("이미지 업로드에 실패했습니다.");
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none ">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto  ">
          {/* CONTENT */}
          {/* ID */}
          <div className="w-full relative">
        <input

          name="password"
          type="password"
          className="peer w-full p-4 pt-6 font-light bg0white border-2 rounded-md outline-none transition pl-4 "
        />
        <label
          className={`absolute text-md duration-150 transform -transform-y-3 top-5 z-10 origin-[0] left-4
        peer-focus:scale-75
        peer-focus:-translate-y-4

        `}
        >
          이메일
        </label>
      </div>
      {/* PASSWORD */}
      <div className="w-full relative">
        <input

          name="password"
          type="password"
          className="peer w-full p-4 pt-6 font-light bg0white border-2 rounded-md outline-none transition pl-4 "
        />
        <label
          className={`absolute text-md duration-150 transform -transform-y-3 top-5 z-10 origin-[0] left-4
        peer-focus:scale-75
        peer-focus:-translate-y-4

        `}
        >
          비밀번호
        </label>
      </div>
          <div className={`translate duration-300 h-full`}>
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
              <div style={{ gap: "1px" }}>
                {publicId ? (
                  <Image
                    style={{ width: "100%" }}
                    cloudName="dsav9fenu"
                    publicId={publicId}
                  />
                ) : (
                  <div> 이미지를 등록해주세요!</div>
                )}
                <div className="flex justify-end mt-2">
                  <input
                    onChange={(e) => {
                      setImageSelected(e.target.files[0]);
                    }}
                    type="file"
                    class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                  "
                  />

                  <button
                    className={`relative rounded-lg hover:opacity-80 transition w-20
                        bg-blue-500 border-blue-500 text-white py-0.5 text-sm font-semibold border-2 
                        `}
                    onClick={uploadImage}
                  >
                    {" "}
                    미리보기
                  </button>
                </div>
                <button
                  className={`relative rounded-lg hover:opacity-80 transition w-full
                bg-blue-500 border-blue-500 text-white py-0.5 text-sm font-semibold border-2 
                `}
                  onClick={handleSubmitButtonClick}
                >
                  프로필사진 변경하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
