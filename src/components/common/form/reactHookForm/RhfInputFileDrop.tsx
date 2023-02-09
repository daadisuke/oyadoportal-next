/**
 *
 * PDFをドラッグアンドドロップでアップできるコンポーネントです
 * react-hook-formを使用します。
 * react-dropzoneを使用します。
 *
 * import { RhfInputFileDrop } from '@/components/common/form/reactHookForm/RhfInputFileDrop'
 *
 */

// reactの機能
import { useState, useEffect, useCallback, useRef } from 'react';

// Next.jsの機能
import Image from 'next/image';

// components
import IconFont from '@/components/common/IconFont'; // アイコンフォントを表示するやつ

// react-hook-form
import { useFormContext } from 'react-hook-form';

import { useDropzone } from 'react-dropzone'; // ドラッグ&ドロップを可能にするやつ

// style
import styles from './RhfInputFileDrop.module.scss';

//= ===========================各種インポートここまで

type Props = {
  name: string;
  values?: any;
};

export const RhfInputFileDrop: React.FC<Props> = ({ name, values }) => {
  // react-hook-formの機能をcontextから呼ぶ
  const { register, setValue, watch } = useFormContext();

  // 一時的にアップしたファイルの名前を保存する場所
  type fileName = string;
  const [fileName, setFileName] = useState<fileName>('');

  const renderFlgRef = useRef(false);

  // ファイル名を監視する
  useEffect(() => {
    if (watch(name)) {
      setFileName(watch(name).name);
      // clearErrors("csv_file")
    } else {
      // 初回レンダリングでは動かないようにする
      // https://qiita.com/irico/items/4b2ff1c25b49ea6a4abf
      if (renderFlgRef.current) {
        setFileName('');
        // 中身が空になったときはhook formのvalueも空にする
        // setValue(name, "", { shouldValidate: true, shouldDirty: true })
      } else {
        // console.log("初回レンダリングのときはここに入る");
        renderFlgRef.current = true;
      }
      // setError("csv_file", { type: "required", message: "アップロードするCSVが選択されていません" })
    }
  }, [watch(name)]);

  // ファイルがアップされたときに実行するやつ
  const onDrop = useCallback((acceptedFiles: any) => {
    const fileData = acceptedFiles[0]; // データは配列の最初だけ使いたいので0番目を取得

    // アップされたファイルがPDFでない場合は処理を終了
    if (!['text/csv'].includes(fileData.type)) {
      alert('アップロードできるのはCSVファイルのみです');
      return;
    }

    // アップされたファイルが3MB以上の場合は処理を終了
    if (!(fileData.size < 3000000)) {
      alert('3MB以内のCSVを選択してください。');
      return;
    }

    // Do something with the files
    console.log('acceptedFiles:', acceptedFiles);
    setValue(name, fileData, { shouldValidate: true, shouldDirty: true });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div className={styles['c-input-dropFile']}>
        {/* ここがトロップゾーン */}
        <div
          {...getRootProps()}
          className={styles['c-input-dropFile__dropZoon']}
        >
          <div className={styles['c-input-dropFile__icon']}>
            <IconFont
              icon="upload"
              className={styles['c-input-dropFile__icon-content']}
            />
          </div>
          <div className={styles['c-input-dropFile__textArea']}>
            <p className={styles['c-input-dropFile__text']}>
              {isDragActive ? (
                // ドロップゾーンの上にファイルを乗せたときのテキスト
                <>ここにファイルをドロップします...</>
              ) : (
                // ファイルがアップされてるかの有無でテキストを切り替える
                <>
                  {fileName ? (
                    <>
                      <span>”{fileName}”</span>
                      <br />
                      をアップロードしました。
                    </>
                  ) : (
                    <>
                      ファイルをドラッグ&ドロップしてください。
                      <br />
                      または
                    </>
                  )}
                </>
              )}
            </p>
          </div>

          <input
            type="file"
            {...register('csv_file', {
              required: 'アップロードするCSVが選択されていません',
            })}
            {...getInputProps()}
          />

          <label
            className={styles['c-input-dropFile__button']}
            htmlFor={`pdf`}
          >
            <IconFont
              icon="file2"
              className={styles['c-input-dropFile__button-icon']}
            />
            <span className={styles['c-input-dropFile__button-text']}>ファイルを選択</span>
          </label>
        </div>
        {/* c-input-dropFile__dropZoon */}

        {/* 削除ボタン */}
        {/* <button className={styles["c-input-dropFile__resetButton"]}
          onClick={() => setValue(name, '')}
          type='button'
        >
          <span className={styles["c-input-dropFile__resetButton-text"]}>
            削除する
          </span>
        </button> */}
      </div>
    </>
  );
};
