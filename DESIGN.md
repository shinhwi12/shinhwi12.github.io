# DESIGN.md

## Overview

Project UNAC의 웹 표면은 **세계관 포털이자 음악 아카이브**다. 화면은 거의 순수한 검은 캔버스(`{colors.canvas}` — `#000000`) 위에 놓이고, 브랜드의 정체성은 장식이 아니라 **타이포그래피, 여백, 드물게 등장하는 이미지**로 만들어진다.

이 시스템의 목표는 “예쁜 UI”가 아니라 다음 인상을 일관되게 유지하는 것이다.

* 공식 기록물 같은 긴장감
* 문학적인 서술
* 음악 북클릿의 밀도
* 밤의 기록보관소 같은 정적 분위기

첫 화면은 작품을 다 보여주는 공간이 아니라, **프로젝트의 성격을 선언하는 문**이어야 한다.

**Key Characteristics:**

* 순수한 검은 캔버스와 흰 텍스트 중심. 라이트 모드 없음.
* 세 가지 타입 체계: **Display**, **Text**, **Mono**.
* 디스플레이 헤드라인은 모두 **UPPERCASE + wide tracking**.
* 본문은 문장형 세리프, 자간 0.
* 기본 CTA는 **투명 배경 + 1px 흰색 윤곽선 + pill radius**.
* 그림자 없음. 글래스모피즘 없음. 강한 그라디언트 없음. 카드 장식 없음.
* 깊이는 오직 **사진 자체**, 검은 여백, 약한 surface 대비로만 만든다.
* 이미지는 많을수록 좋은 것이 아니라, **드물게 등장할수록 강하다**.

---

## Colors

### Brand & Accent

* **Primary** (`{colors.primary}` — `#ffffff`): 주요 텍스트, 윤곽선 버튼, 워드마크.
* **Link** (`{colors.link}` — `#c7d2e6`): 유일한 비단색 포인트. 인라인 링크에만 제한적으로 사용.

### Surface

* **Canvas** (`{colors.canvas}` — `#000000`): 전체 페이지 기본 바탕.
* **Surface Soft** (`{colors.surface-soft}` — `#0d0d0d`): 표, 메타, 밀도 높은 정보 구간.
* **Surface Card** (`{colors.surface-card}` — `#141414`): 드물게 쓰는 카드성 블록.
* **Surface Elevated** (`{colors.surface-elevated}` — `#1f1f1f`): 중첩 정보 블록.
* **Hairline** (`{colors.hairline}` — `#262626`): 1px 구분선.
* **Hairline Strong** (`{colors.hairline-strong}` — `#3a3a3a`): 입력창 밑줄, 강한 경계.

### Text

* **On Dark** (`{colors.on-dark}` — `#ffffff`): 제목, 주요 라벨, CTA 텍스트.
* **Body** (`{colors.body}` — `#cccccc`): 기본 본문.
* **Body Strong** (`{colors.body-strong}` — `#e6e6e6`): 강조 리드 문장.
* **Muted** (`{colors.muted}` — `#999999`): 날짜, 캡션, 보조 링크, 메타.
* **Muted Soft** (`{colors.muted-soft}` — `#666666`): 저작권, 법적 문구, 낮은 우선순위 정보.

### Principles

이 시스템은 실질적으로 **흑백 시스템**이다.
세계관 사이트처럼 보이게 하려고 임의의 보라, 금색, 청록, 네온 컬러를 UI에 넣지 않는다. 색은 이미지 안에서만 존재해야 한다.

---

## Typography

### Typeface Trinity

시스템은 세 가지 타입 계열로 운영된다.

1. **UNAC Display**
   로고, 메인 헤드라인, 섹션 타이틀, 작품명, 앨범명에 사용한다.
   Uppercase, wide tracking, weight 400.

2. **UNAC Text**
   세리프 본문용. 세계관 설명, 소설 소개, About 본문, 긴 서술 텍스트에 사용한다.
   Sentence case, letter-spacing 0.

3. **UNAC Mono**
   버튼, 내비게이션, 캡션, 날짜, 트랙 번호, 문서 버전, 아카이브 라벨에 사용한다.
   Uppercase, precise, technical.

이 분리는 절대적이다.

* Display를 버튼에 쓰지 않는다.
* Mono를 본문에 쓰지 않는다.
* Text를 버튼에 쓰지 않는다.

### Recommended Open Font Substitutes

* **UNAC Display** → `Saira Condensed` 400
* **UNAC Text** → `Cormorant Garamond` Regular
* **UNAC Mono** → `IBM Plex Mono` Regular

### Hierarchy

| Token                            | Size | Weight | Line Height | Letter Spacing | Use                    |
| -------------------------------- | ---: | -----: | ----------: | -------------: | ---------------------- |
| `{typography.display-xl}`        | 72px |    400 |        1.05 |            4px | Home hero, page title  |
| `{typography.display-lg}`        | 48px |    400 |        1.12 |            3px | Section head           |
| `{typography.display-md}`        | 32px |    400 |        1.18 |            2px | Subsection, work title |
| `{typography.display-sm}`        | 24px |    400 |        1.25 |          1.5px | Small title            |
| `{typography.wordmark}`          | 14px |    400 |         1.0 |            6px | Top wordmark           |
| `{typography.title-md}`          | 20px |    400 |         1.3 |            1px | Mid title              |
| `{typography.caption-uppercase}` | 11px |    400 |         1.4 |            2px | Caption, metadata      |
| `{typography.body-lg}`           | 18px |    400 |         1.7 |              0 | Lead paragraph         |
| `{typography.body-md}`           | 16px |    400 |        1.75 |              0 | Body                   |
| `{typography.body-sm}`           | 14px |    400 |         1.7 |              0 | Footer, fine print     |
| `{typography.button}`            | 14px |    400 |         1.0 |          2.5px | Button label           |
| `{typography.nav-link}`          | 12px |    400 |         1.4 |            2px | Navigation             |

### Principles

Bold를 거의 사용하지 않는다. 강조는 아래 네 가지로 만든다.

1. 크기
2. 자간
3. 대문자와 문장형의 대비
4. Display / Text / Mono의 패밀리 대비

굵기로 긴장을 만들면 범용 템플릿처럼 보인다. UNAC는 더 느리고, 더 차갑고, 더 정돈된 리듬을 가져야 한다.

---

## Layout

### Spacing System

* **Base unit:** 4px
* `{spacing.xxs}` 4px
* `{spacing.xs}` 8px
* `{spacing.sm}` 12px
* `{spacing.md}` 16px
* `{spacing.lg}` 24px
* `{spacing.xl}` 40px
* `{spacing.xxl}` 64px
* `{spacing.section}` 120px

### Grid & Container

* **Max content width:** 1280px centered
* Hero / visual band는 full-bleed 허용
* Editorial body column은 680–760px 정도로 좁게 유지
* Story reader는 단일 컬럼, 좁은 가독성 폭
* Music은 asymmetric editorial split 허용

### Whitespace Philosophy

UNAC는 정보를 빽빽하게 담는 사이트가 아니다.
비어 있는 검은 공간이 작품의 밀도를 만든다. 섹션 간격을 줄이거나 화면당 정보량을 높이는 방향은 브랜드를 약하게 만든다.

---

## Elevation & Depth

| Level              | Treatment            | Use                  |
| ------------------ | -------------------- | -------------------- |
| Flat               | 그림자 없음, 표면 없음        | 기본 레이아웃              |
| Hairline           | 1px divider          | 섹션 경계, 목록 구분선        |
| Surface Card       | `#141414`, no shadow | 드문 보조 박스             |
| Photographic Depth | 이미지 자체의 조명/프레이밍      | Hero, music, gallery |

장식적 깊이는 사용하지 않는다.

* No shadows
* No glassmorphism
* No neon glow
* No heavy gradients
* No decorative chrome

깊이는 사진, 검은 여백, 자간 큰 제목에서만 나온다.

---

## Shapes

### Border Radius

| Token            |  Value | Use                 |
| ---------------- | -----: | ------------------- |
| `{rounded.none}` |    0px | 카드, 표, 이미지 프레임, 입력창 |
| `{rounded.pill}` | 9999px | 버튼                  |
| `{rounded.full}` |    50% | 원형 아이콘 버튼           |

### Principles

대부분의 UI는 직각이어야 한다.
둥근 카드는 소비자용 SaaS처럼 보이고, 과하게 다듬어진 감각을 준다. UNAC는 “디자인된 사이트”보다 “정리된 기록물”처럼 보여야 한다.

---

## Components

### Top Navigation

**`top-nav`**

* 56px height
* transparent background
* left: `MENU` or section label
* center: `PROJECT UNAC` or `SHINHWI`
* right: `ARCHIVE`, `MUSIC`, or current section label
* type: UNAC Mono / wordmark style

헤더는 강한 바나 패널처럼 보이면 안 된다.

### Wordmark

**`wordmark-display`**

* UNAC Display
* 14px
* 6px tracking
* uppercase
* weight 400

### Button

**`button-primary`**

* transparent background
* 1px white outline
* pill radius
* height 44px
* UNAC Mono
* uppercase
* 2.5px tracking

Examples:

* `ENTER THE WORLD`
* `MUSIC BY SHINHWI`
* `READ THE STORY`

### Text Link

**`text-link`**

* `{colors.link}`
* underline
* inherits body text style

### Hero Type Band

**`hero-type-band`**

Home의 핵심 hero.

* black canvas
* large uppercase headline
* short definition sentence
* 1–2 CTA buttons
* no image or extremely subtle symbolic image only

역할은 보여주기가 아니라 선언하기다.

### World Intro Band

**`world-intro-band`**

* title
* short editorial introduction
* one restrained symbolic image
* must feel like an official archive, not a fan wiki

### Story Reader

**`story-reader`**

* narrow body width
* serif body
* generous line-height
* minimal image
* quiet previous / next navigation

소설 페이지는 블로그가 아니라 전자책처럼 읽혀야 한다.

### Album Feature Band

**`album-feature-band`**

* large album cover
* large album / track title
* short concept paragraph
* small platform links
* related image if needed

Music 페이지는 링크 허브가 아니라 디지털 북클릿처럼 보여야 한다.

### Archive Figure

**`archive-figure`**

* early logo
* early artwork
* remaster comparison
* date / version / source
* short caption

오래된 자료는 잡동사니가 아니라 역사 자료처럼 보여야 한다.

### Footer

**`footer`**

* black background
* muted text
* quiet link columns
* centered wordmark at the bottom if needed

---

## Content Architecture

### Home

* logo
* large `PROJECT UNAC`
* one-sentence definition
* CTA 1–2개
* first view must be typography-first
* images appear from the second fold onward

Do not put artist face, character image, album art, and logo all together in the hero.

### Project UNAC

* project definition
* media mix structure
* relation between worldbuilding, story, music, and visuals
* should feel like an official statement, not an ad page

### World

* Overview
* Characters
* Factions
* Glossary
* Timeline
* Archives

Should feel like an official setting archive, not a generic wiki.

### Story

* series list
* series detail
* chapter list
* chapter reader

Reading experience is the priority.

### Music

Split clearly:

* `SHINHWI Originals`
* `Project UNAC OST`

Each album / track may include:

* cover
* concept
* lyrics
* related images
* external platform links
* connection to Project UNAC if applicable

Music must not look like a dashboard or link collection.

### Gallery

Categories:

* World Art
* Character Art
* Music Visuals
* Archive / Origins

The gallery should feel curated, not like a generic image dump.

### About

* SHINHWI introduction
* role in Project UNAC
* platform links
* contact
* 1–2 restrained artist images

About should explain identity, not sell the face.

---

## Image Policy

Images are stronger when used rarely.

### Priority Order

1. logo / symbolic image
2. representative world image
3. album cover
4. artist photo
5. early archive image

### Rules

* First view image is optional.
* Only one hero image may dominate a screen.
* Do not make character image and artist face compete in the same hero.
* Strong gore, erotic, or highly intense fantasy images belong inside detail pages only.
* Old images must appear in Archive context.
* Artist photos work best in About and Music, not as the main homepage hero.

---

## Do's and Don'ts

### Do

* Use pure black canvas.
* Use uppercase wide-tracked display headlines.
* Use serif body text.
* Use monospace navigation, buttons, captions, and metadata.
* Use transparent outlined pill buttons.
* Keep section spacing generous.
* Make Home typography-first.
* Make Music feel like a digital booklet.
* Make Story feel like an ebook.
* Make World feel like an official archive.
* Use images rarely and deliberately.

### Don't

* Do not add random accent colors.
* Do not use colorful section themes.
* Do not use card-heavy layouts.
* Do not add shadows or glow.
* Do not use rounded cards.
* Do not bold everything.
* Do not put too many images in the first view.
* Do not make Music a simple link hub.
* Do not make Story look like a blog.
* Do not make Gallery an image dump.

---

## Responsive Behavior

### Breakpoints

| Name    | Width       | Key Changes                                            |
| ------- | ----------- | ------------------------------------------------------ |
| Mobile  | < 768px     | hero title 72 → 32px, nav simplified, gallery 1-column |
| Tablet  | 768–1024px  | limited 2-column layouts                               |
| Desktop | 1024–1440px | max-width 1280px, full editorial rhythm                |
| Wide    | > 1440px    | same structure, more whitespace                        |

### Touch Targets

* `button-primary`: minimum 44 × 44px
* `button-icon`: 40 × 40px
* `text-input`: 44px height
* music links and story navigation must be easy to tap

### Collapsing Strategy

* top-nav remains minimal
* hero stays typography-first
* world multi-column becomes single-column on mobile
* music album grid collapses 3 → 2 → 1
* story reader keeps narrow readable width

---

## Implementation Rules for Codex

Codex must follow this file strictly.

If common web design patterns conflict with this file, this file wins.

Do not add:

* bright accent colors
* colorful gradients
* glassmorphism
* card-heavy dashboards
* rounded panels
* shadows
* playful icons
* unnecessary animation
* backend/server code

Use:

* Astro
* TypeScript
* Markdown or MDX content
* content collections
* GitHub Pages deployment
* static site architecture

Initial sections:

* Home
* Project UNAC
* World
* Story
* Music
* Gallery
* About

Music must be split into:

* SHINHWI Originals
* Project UNAC OST

Story must support serialized novel chapters.

Gallery must support image archive categories.

---

## Iteration Guide

1. Build one category at a time.
2. Start with Home, then Music, then Story, then World, Gallery, About.
3. New components default to square corners.
4. Buttons are the only default pill-shaped elements.
5. Use design tokens instead of hardcoded styling.
6. Maintain Display / Text / Mono separation.
7. When emphasis is needed, use more whitespace or stronger photography before adding decoration.

---

## Final Brand Sentence

**Project UNAC는 검은 캔버스 위에, 넓게 벌어진 올캡스 제목과 문학적인 세리프 본문, 드물게 등장하는 이미지로 세계의 밀도를 만드는 아카이브형 인터페이스다.**
