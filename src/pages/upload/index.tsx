// components: layout
import type { ReactElement } from 'react';
import SideMenuLayout from '@/components/layouts/SideMenuLayout';

// components: common
import IconFont from '@/components/common/IconFont';
import Button from '@/components/common/button';
import Alert from '@/components/common/Alert'; // errorやsuccessメーセージを表示するやつ
import Breadcrumb from '@/components/common/Breadcrumb';

// react-hook-form
import { useForm, SubmitHandler, FormProvider, useFormContext } from 'react-hook-form'; // SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import { RhfInputSelect } from '@/components/common/form/reactHookForm/RhfInputSelect'; //select
import { RhfInputFileDrop } from '@/components/common/form/reactHookForm/RhfInputFileDrop';
import { RhfValidateMessage } from '@/components/common/form/reactHookForm/RhfValidateMessage';

import { AssistInputLayout, AssistInputLayoutItem } from '@/components/common/form/assistInput/AssistInputLayout';

//style
import styles from './index.module.scss';

//= ===========================各種インポートここまで

// レイアウトを定義
Home.getLayout = (page: ReactElement) => (
  <>
    <SideMenuLayout>{page}</SideMenuLayout>
  </>
);

export default function Home() {
  // useFormを呼び出して使いたいメソッドを書く
  const methods = useForm<any>({
    mode: 'onChange',
    criteriaMode: 'all',
    // defaultValues,
  });

  const onSubmit = async (data: any) => {};

  return (
    <>
      <Breadcrumb
        data={[
          {
            name: 'home',
            path: '/mypage',
          },
          {
            name: 'File Makerアップロード',
          },
        ]}
      />

      <div className={styles['p-pageHeader']}>
        <div className={styles['p-pageHeader__inner']}>
          <h1 className={styles['p-pageHeader-title']}>File Makerアップロード</h1>
        </div>
      </div>

      <div className={styles['p-csvUpload']}>
        <div className={styles['p-csvUpload-header']}>
          <div className={styles['p-csvUpload-header__main']}>
            <h2 className={styles['p-csvUpload-header__title']}>アップロードするファイルを選択</h2>
            {/* <p className={styles['p-csvUpload-header__text']}>
              登録するCSVファイルを1つ選択してください。
            </p> */}
          </div>
          <div className={styles['p-csvUpload-header__sub']}>
            {/* <CsvFormatDownload
              formatDownloaddData={formatData && formatData.data}
              formatFileName={formatData && formatData.file_name}
              characterCode={'utf-8'}
            /> */}
          </div>
        </div>
        {/* p-csvUpload-header */}

        <div className={styles['p-csvUpload-body']}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className={styles['p-csvUpload-form-unit']}>
                <div className={styles['p-csvUpload-form-unit__header']}>
                  <p className={styles['p-csvUpload-form-unit__header-text']}>対象日</p>
                </div>
                <div className={styles['p-csvUpload-form-unit__body']}>
                  <AssistInputLayout layoutType="liquid">
                    <AssistInputLayoutItem rightText="年">
                      <RhfInputSelect
                        name="year"
                        required="対象日の「年」が選択されていません"
                      >
                        <option value="">選択</option>
                        {/* {masterParams.common?.target_date.map((v, index) => (
                            <option key={index} value={v}>
                              {v}
                            </option>
                          ))} */}
                      </RhfInputSelect>
                    </AssistInputLayoutItem>
                    <AssistInputLayoutItem rightText="月">
                      <RhfInputSelect
                        name="month"
                        required="対象日の「月」が選択されていません"
                      >
                        <option value="">選択</option>
                        {/* {masterParams.common?.month.map((v, index) => (
                            <option key={index} value={v}>
                              {v}
                            </option>
                          ))} */}
                      </RhfInputSelect>
                    </AssistInputLayoutItem>
                  </AssistInputLayout>

                  <RhfValidateMessage name="year" />
                  <RhfValidateMessage name="month" />
                </div>
              </div>
              {/* p-csvUpload-form-unit */}

              {/* APIのエラーメッセージ表示エリア */}
              {/* {Array.isArray(aptitudeMatchingUploadStateData.errors) && (
                <>
                  <Alert alert='danger'>
                    {
                      // エラーは配列で帰ってくるのでmapで回す
                      aptitudeMatchingUploadStateData.errors.map(
                        (error: any, i: number) => (
                          <React.Fragment key={i}>{error}</React.Fragment>
                        )
                      )
                    }
                  </Alert>
                </>
              )} */}

              {/* CSVのアップロードが完了したときに出すメッセージ */}
              {/* {aptitudeMatchingUploadStateData.uploadSuccess && (
                <>
                  <Alert alert='success'>
                    正常にCSVのアップロードが完了しました。
                  </Alert>
                </>
              )} */}

              <div className={styles['p-csvUpload-form-unit']}>
                <div className={styles['p-csvUpload-form-unit__body']}>
                  <RhfInputFileDrop name="csv_file" />
                  <RhfValidateMessage name="csv_file" />
                </div>
              </div>
              {/* p-csvUpload-form-unit */}

              <div className={styles['p-csvUpload-form-submit']}>
                <div className={styles['p-csvUpload-form-submit__button']}>
                  <Button
                    tagType="button"
                    theme={methods.formState.isValid ? 'basic' : 'disabled'}
                    text="アップロード"
                    type="submit"
                    leftIcon="upload2"
                  />
                </div>
                <div className={styles['p-csvUpload-form-submit__button']}>
                  <button
                    className={styles['p-csvUpload-form-csvResetButton']}
                    onClick={() =>
                      methods.setValue('csv_file', '', {
                        shouldValidate: true,
                        shouldDirty: true,
                      })
                    }
                    type="button"
                  >
                    <span className={styles['p-csvUpload-form-csvResetButton__text']}>削除する</span>
                  </button>
                </div>
              </div>
              {/* p-csvUpload-form-submit */}
            </form>
          </FormProvider>
        </div>
        {/* p-csvUpload-body */}
      </div>
      {/* p-csvUpload */}
    </>
  );
}
