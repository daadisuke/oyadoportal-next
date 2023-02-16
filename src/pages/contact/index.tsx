// components : layout
import type { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

//libs
import { getPath } from '@/libs/pathManager';

import Default from '@/components/layouts/Default';
import styles from './index.module.scss';

//= ===========================各種インポートここまで

// レイアウトを定義
Contact.getLayout = (page: ReactElement) => (
  <>
    <Default>{page}</Default>
  </>
);

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const contactList = ['無料相談', '資料請求', 'ITサポートについて', '集客サポートについて', '人手不足解消について', '資金不足解消について', '設備導入、改修サポートについて'];

    // const [contactItem, contactItems] = useState<MyFavoriteFoods[]>([
    //     {
    //       id: "sushi",
    //       name: "寿司",
    //       checked: false,
    //       disabled: false,
    //     },
    //     {
    //       id: "yakiniku",
    //       name: "焼肉",
    //       checked: false,
    //       disabled: false,
    //     },
    //     {
    //       id: "khao_mangai",
    //       name: "カオマンガイ",
    //       checked: false,
    //       disabled: false,
    //     },
    //   ]);


    const onSubmit = (data) => console.log(data);
    

  return (
    <>
        <div className={styles['c-heading']}>
            <h1 className={styles['c-heading__pageTitle']}>
                問い合わせ
            </h1>
        </div>

        <section className={`${styles['contact-main']} ${styles['l-section']}`}>

            <div className={styles['l-section__inner']}>

                <ul className={styles['contact-main__flow']}>
                    <li className={styles['active']}>入力</li>
                    <li>確認</li>
                    <li>完了</li>
                </ul>
                
                <form onSubmit={handleSubmit(onSubmit)}>

            <div className={styles['contact-main__form']}>
                
                <dl>
                    <dt>お問い合わせ項目<span>必須</span></dt>
                    <dd>
                        {contactList.map((text, index) => (
                            <span key={index}>
                                <input
                                type="checkbox"
                                id={`your_contact_item_${index}`}
                                value={text}
                                {...register(`your_contact_item`, {})}
                                />
                                <label htmlFor={`your_contact_item_${index}`}>{text}</label>
                            </span>
                        ))}
                    </dd>
                    <dt><label htmlFor="your_facility_name">施設名</label><span>必須</span></dt>
                    <dd>
                        <input type="text" name="your_facility_name" placeholder="お宿ポータル" />
                    </dd>
                    <dt><label htmlFor="your_name">氏名</label><span>必須</span></dt>
                    <dd>
                        <input type="text" name="your_name" placeholder="山田 太郎" />
                    </dd>
                    <dt><label htmlFor="your_name_kana">フリガナ</label><span>必須</span></dt>
                    <dd>
                        <input type="text" name="your_name_kana" placeholder="ヤマダ タロウ" />
                    </dd>
                    <dt><label htmlFor="your_email">メールアドレス</label><span>必須</span></dt>
                    <dd>
                        <input type="text" name="your_email" placeholder="info@example.com" />
                    </dd>
                    <dt><label htmlFor="your_email_confirm">メールアドレス（確認用）</label><span>必須</span></dt>
                    <dd>
                        <input type="text" name="your_email_confirm" placeholder="メールアドレスをもう一度入力" />
                    </dd>
                    <dt><label htmlFor="your_zip_code">郵便番号</label></dt>
                    <dd>
                        <input type="text" name="your_zip_code" placeholder="012-3456" />
                    </dd>
                    <dt><label htmlFor="your_prefecture">都道府県</label></dt>
                    <dd>
                        <select className={styles['text-ss']} name="your_prefecture">
                                                    
                            <optgroup label="都道府県を選択する">
                                <option value="">未選択</option>
                                <option value="北海道">北海道</option>
                                <option value="青森県">青森県</option>
                                <option value="岩手県">岩手県</option>
                                <option value="宮城県">宮城県</option>
                                <option value="秋田県">秋田県</option>
                                <option value="山形県">山形県</option>
                                <option value="福島県">福島県</option>
                                <option value="茨城県">茨城県</option>
                                <option value="栃木県">栃木県</option>
                                <option value="群馬県">群馬県</option>
                                <option value="埼玉県">埼玉県</option>
                                <option value="千葉県">千葉県</option>
                                <option value="東京都">東京都</option>
                                <option value="神奈川県">神奈川県</option>
                                <option value="新潟県">新潟県</option>
                                <option value="富山県">富山県</option>
                                <option value="石川県">石川県</option>
                                <option value="福井県">福井県</option>
                                <option value="山梨県">山梨県</option>
                                <option value="長野県">長野県</option>
                                <option value="岐阜県">岐阜県</option>
                                <option value="静岡県">静岡県</option>
                                <option value="愛知県">愛知県</option>
                                <option value="三重県">三重県</option>
                                <option value="滋賀県">滋賀県</option>
                                <option value="京都府">京都府</option>
                                <option value="大阪府">大阪府</option>
                                <option value="兵庫県">兵庫県</option>
                                <option value="奈良県">奈良県</option>
                                <option value="和歌山県">和歌山県</option>
                                <option value="鳥取県">鳥取県</option>
                                <option value="島根県">島根県</option>
                                <option value="岡山県">岡山県</option>
                                <option value="広島県">広島県</option>
                                <option value="山口県">山口県</option>
                                <option value="徳島県">徳島県</option>
                                <option value="香川県">香川県</option>
                                <option value="愛媛県">愛媛県</option>
                                <option value="高知県">高知県</option>
                                <option value="福岡県">福岡県</option>
                                <option value="佐賀県">佐賀県</option>
                                <option value="長崎県">長崎県</option>
                                <option value="熊本県">熊本県</option>
                                <option value="大分県">大分県</option>
                                <option value="宮崎県">宮崎県</option>
                                <option value="鹿児島県">鹿児島県</option>
                                <option value="沖縄県">沖縄県</option>
                            </optgroup>
                            
                        </select>
                    </dd>
                    <dt><label htmlFor="your_city">市区町村</label></dt>
                    <dd>
                        <input type="text" name="your_city" placeholder="市区町村" />
                    </dd>
                    <dt><label htmlFor="your_chome_address">丁目番地</label></dt>
                    <dd>
                        <input type="text" name="your_chome_address" placeholder="丁目番地" />
                    </dd>
                    <dt><label htmlFor="your_building_name">建物名</label></dt>
                    <dd>
                        <input type="text" name="your_building_name" placeholder="建物名" />
                    </dd>
                    <dt><label htmlFor="your_phone_number">お電話番号</label><span>必須</span></dt>
                    <dd>
                        <input type="text" name="your_phone_number" placeholder="お電話番号" />
                    </dd>
                    <dt><label htmlFor="your_contact_content">お問い合わせ内容</label><span>必須</span></dt>
                    <dd>
                        <textarea name="your_contact_content" placeholder="入力してください"></textarea>
                    </dd>
                </dl>
                
            </div>

            <div className={styles['contact-main__check']}>
                <p><a href="">個人情報保護方針</a>を必ずお読みください。<br />上記の内容に同意いただいた場合は、確認画面へお進みください。</p>
                <p className={styles['contact-main__checkbox']}>
                    <input type="checkbox" name="agree" />
                    <label htmlFor="agree">個人情報保護方針に同意する</label>
                </p>
                <p className={styles['c-btn__more']}>
                    <input type="submit" value="確認画面へ進む" />
                </p>
            </div>

        </form>

            </div>

            <Breadcrumb
                data={[
                {
                    name: 'TOP',
                    path: `${getPath('dashboard')}`,
                },
                {
                    name: 'プライバシーポリシー',
                },
                ]}
            />

        </section>

    </>
  );
}
