# PROJECT_HANDOFF.md

# PART 1 — PROJECT FOUNDATION

---

# Project Name

GTA Companion

---

# Founder

Gabrielius Reventas

Product Owner

---

# Lead Technical Partner

ChatGPT

The AI is acting as Lead Engineer, Software Architect, UI/UX Designer, Technical Writer and Development Partner.

---

# Project Vision

Build the world's most premium GTA companion platform.

Not another GTA wiki.

Not another database.

Not another guide website.

The objective is to become the definitive companion platform for Grand Theft Auto VI and future Rockstar titles.

Everything must feel premium.

Users should immediately feel that the website is closer to Apple, Tesla or Rockstar quality than a fan-made wiki.

The platform must eventually support:

- Website
- Mobile App
- User Accounts
- Premium Membership
- Interactive Map
- Progress Tracking
- AI Assistant
- Community Features
- Giveaways
- Future GTA titles

The architecture must allow future GTA games to be added without rebuilding the project.

---

# Long-Term Goal

Become the largest GTA Companion platform on the internet.

Potential revenue sources:

- Premium Membership
- Mobile App
- Advertising
- Affiliate Links
- Merchandise
- Giveaways
- Sponsorships
- Premium Tools

---

# Core Philosophy

Quality over speed.

Never rush features.

Every page should feel handcrafted.

Every animation should feel intentional.

Every interaction should feel premium.

Never build temporary solutions.

Always build scalable solutions.

---

# Development Philosophy

The project is being built like a commercial SaaS product.

Never hack solutions together.

Never duplicate code.

Always prefer reusable components.

Always keep architecture scalable.

Always think long term.

---

# Current Development Phase

Sprint 2

Homepage foundation completed.

Search system currently under development.

---

# Tech Stack

Framework

- Next.js 16
- App Router

Language

- TypeScript

Styling

- Tailwind CSS

Package Manager

- npm

Deployment

- Vercel

Version Control

- Git
- GitHub

Repository

greventas-web/gta-companion

---

# Design Language

Premium

Modern

Minimal

Luxury

Fast

Dark

Cinematic

Player First

---

# Primary Colors

Background

#050505

Surface

#09090B

Cards

#18181B

Primary Accent

Pink

Secondary Accent

Purple

Text

White

Secondary Text

Zinc 400

Borders

White 10%

---

# Design Goals

Everything should have breathing room.

Nothing should feel cramped.

Cards should have:

- rounded corners
- subtle borders
- premium hover animations

Buttons should:

- animate smoothly
- slightly lift
- glow softly

No cheap animations.

No flashy effects.

Everything should feel restrained.

---

# Homepage Goal

The homepage is the first impression.

The target quality is the reference image provided by Gabrielius.

The homepage should immediately communicate:

Premium.

Modern.

Rockstar quality.

Large cinematic hero.

Beautiful lighting.

Excellent spacing.

High-end typography.

Large images.

Clean cards.

Heavy use of blur.

Soft gradients.

Pink ambient lighting.

---

# Performance Rules

Performance is equally important as visuals.

Never sacrifice performance for unnecessary animation.

Use:

Next/Image

Lazy loading

Code splitting

Reusable components

Minimal client components

Server Components whenever possible.

---

# Coding Standards

TypeScript only.

No JavaScript.

Strong typing.

No any.

Reusable code.

Readable code.

Scalable architecture.

One responsibility per component.

Avoid duplicate logic.

---

# Response Rules For Future ChatGPT

Always send COMPLETE FILES.

Never send partial edits.

Never send "replace this line."

The user copies entire files.

Complete files prevent mistakes.

---

# Verification Rule

Before generating code that consumes data:

Verify the corresponding type.

Never assume property names.

This rule was introduced after several TypeScript errors caused by mismatched interfaces.

---

# Workflow

Repeat forever:

Create

Paste

Compile

Fix

Continue

Never continue while compile errors exist.

---

# Communication Rules

Minimal conversation.

Work-focused.

Avoid long explanations.

Keep replies concise.

Send complete files.

Move to the next task immediately.

The user wants development speed, not discussion.

---

# Current Objective

Complete the premium GTA Companion website until it matches the provided homepage reference image.

After the homepage reaches the desired quality:

Continue with:

Sprint 2

Search

Authentication

Dashboard

Favorites

Interactive Map

AI Companion

---

END OF PART 1

# PROJECT_HANDOFF.md

# PART 2 — ARCHITECTURE & PROJECT STRUCTURE

---

# Project Structure

The project follows a scalable architecture.

No feature should become dependent on another feature.

Everything should remain modular.

---

# Root Structure

app/

components/

data/

lib/

types/

public/

---

# app/

Contains every route.

Uses Next.js App Router.

Each feature lives in its own folder.

Example:

app/

page.tsx

vehicles/

characters/

locations/

businesses/

brands/

weapons/

animals/

activities/

guides/

news/

login/

register/

profile/

map/

---

# Route Pattern

Every database follows the same architecture.

Example:

vehicles/

page.tsx

[slug]/

page.tsx

The same applies for:

Characters

Locations

Businesses

Brands

Weapons

Animals

Activities

Guides

News

This consistency must never change.

---

# components/

Reusable UI only.

Business logic stays elsewhere whenever possible.

Major folders currently include:

components/

home/

search/

cards/

navigation/

shared/

authentication/

future/

---

# Current Major Components

Navbar

Hero

Footer

SearchBar

VehicleCard

CharacterCard

NewsCard

CategoryCard

QuickStats

FeaturedVehicles

FeaturedCharacters

LatestNews

BackgroundGlow

Section

SectionHeader

HomeContainer

MegaMenu

NavLink

Search Components

---

# Home Components

components/home/

BackgroundGlow.tsx

HomeContainer.tsx

Section.tsx

SectionHeader.tsx

ExploreGrid.tsx

HeroSection.tsx

QuickStatsSection.tsx

FeaturedVehicleSection.tsx

FeaturedCharacterSection.tsx

LatestNewsSection.tsx

FooterSection.tsx

sections/

cards/

These should remain reusable.

---

# Search Components

components/search/

SearchDialog.tsx

SearchInput.tsx

SearchResults.tsx

SearchResultCard.tsx

useSearch.ts

Search is designed as a standalone system.

It should not depend on Navbar.

Navbar only opens it.

---

# Data Folder

Every database has its own file.

Current folders/files include:

activities.ts

animals.ts

brands.ts

businesses.ts

characters.ts

guides.ts

locations.ts

manufacturers.ts

news.ts

vehicles/

weapons.ts

Vehicle data is split by category.

This architecture should remain.

---

# Vehicle Folder

Vehicles are separated into category files.

Examples:

sports.ts

super.ts

sedan.ts

muscle.ts

bike.ts

boat.ts

truck.ts

aircraft.ts

SUV

Commercial

Utility

Van

etc.

The root vehicles index combines everything.

Never merge these into one giant file.

---

# Types Folder

Every dataset has its own interface.

Examples:

vehicle.ts

character.ts

location.ts

business.ts

brand.ts

weapon.ts

animal.ts

activity.ts

guide.ts

news.ts

Strong typing is mandatory.

Never replace interfaces with "any".

---

# lib/

Contains reusable application logic.

Current structure:

lib/

search/

Inside:

index.ts

types.ts

Future additions:

auth/

utils/

helpers/

constants/

analytics/

---

# Search Architecture

Search is centralized.

Search does NOT search databases directly.

Instead:

Every dataset maps into one shared array.

searchIndex

Search operates only on:

searchIndex

Advantages:

Single search algorithm

Easy scaling

Fast filtering

Simple maintenance

Future fuzzy search support

Future AI support

---

# Public Folder

All assets live here.

Examples:

images/

vehicles/

characters/

locations/

businesses/

brands/

weapons/

animals/

activities/

guides/

news/

home/

Use Next/Image whenever possible.

---

# Component Rules

Components should be:

Reusable

Independent

Easy to move

Easy to test

Easy to replace

No page-specific logic inside reusable components.

---

# File Naming

PascalCase

Components

Hero.tsx

Navbar.tsx

VehicleCard.tsx

camelCase

Hooks

useSearch.ts

lowercase

Data

vehicles.ts

brands.ts

news.ts

---

# Import Style

Always use aliases.

Example:

@/components/

@/data/

@/types/

@/lib/

Avoid long relative imports whenever possible.

---

# Future Architecture

Planned additions:

components/dashboard

components/profile

components/map

components/ui

components/modals

components/forms

components/settings

lib/auth

lib/database

lib/api

lib/cache

The architecture should continue growing modularly.

Never create a "misc" folder.

Every feature deserves a proper home.

---

# Non-Negotiable Rules

Never duplicate components.

Never duplicate types.

Never duplicate search logic.

Never duplicate card layouts.

Extract reusable patterns.

Build once.

Reuse everywhere.

---

END OF PART 2
# PROJECT_HANDOFF.md

# PART 3 — DESIGN SYSTEM & HOMEPAGE ARCHITECTURE

---

# Overall Design Direction

The GTA Companion website should immediately feel like a premium AAA product.

The closest inspirations are:

- Rockstar Games
- Apple
- Tesla
- Linear
- Stripe
- Rivian

Not:

- Fandom
- GTA Wiki
- Generic Bootstrap websites

The experience should feel cinematic.

---

# Design Keywords

Premium

Luxury

Modern

Minimal

Fast

Elegant

Cinematic

Dark

Immersive

Readable

---

# Overall Layout Philosophy

Large spacing.

Large typography.

Large imagery.

Minimal clutter.

Every section should breathe.

Nothing should feel cramped.

The homepage should scroll naturally.

---

# Theme

Dark mode first.

There is currently no priority to build a light mode.

Everything is optimized around the dark theme.

---

# Visual Identity

Primary Accent

Pink

Secondary Accent

Purple

Background

Almost black

Soft gradients

Heavy blur

Large ambient lighting

---

# Ambient Lighting

The website makes heavy use of:

Blur

Radial gradients

Soft glow

Pink lighting

Purple lighting

These should remain subtle.

Never overpower the content.

---

# Glassmorphism

Used carefully.

Mostly on:

Search

Navbar

Buttons

Cards

Badges

Inputs

Never overuse glass effects.

---

# Borders

Very subtle.

Usually:

border-white/10

Hover:

border-pink-500

---

# Corner Radius

Large.

Examples:

rounded-2xl

rounded-3xl

rounded-[28px]

rounded-[32px]

rounded-[36px]

Avoid sharp corners.

---

# Shadows

Soft.

Large.

Blurred.

Examples:

Pink glow

Large ambient shadows

Inset vignette

Never harsh shadows.

---

# Typography

Heavy.

Modern.

Bold.

Examples:

font-black

tracking-tight

Large headings.

Readable paragraphs.

---

# Homepage Structure

Current order:

Navbar

Hero

Quick Stats

Explore

Featured Vehicles

Featured Characters

Latest News

Footer

This order should remain.

---

# Navbar

Current features:

Sticky

Blurred background

Logo

Navigation

Mega Menu

Search Bar

Authentication buttons

Search overlay trigger

Future additions:

Notifications

Avatar

Dashboard

Membership

---

# Hero

Purpose:

Immediately impress the visitor.

Current features:

Large Rockstar artwork

Pink ambient lighting

Gradient overlays

Two CTA buttons

Large typography

Premium spacing

Future additions:

Parallax

Micro animations

Animated background

Dynamic featured content

---

# Quick Stats

Purpose:

Instant credibility.

Displays:

Vehicle count

Manufacturers

Official information

Cards animate on hover.

---

# Explore Section

Grid of categories.

Examples:

Vehicles

Characters

Locations

Businesses

Weapons

Animals

Future additions:

Hover animations

Icons

Statistics

Live counts

---

# Featured Vehicles

Shows selected vehicles.

Uses:

VehicleCard

Should remain reusable.

---

# Featured Characters

Uses:

CharacterCard

Same philosophy as VehicleCard.

---

# Latest News

Uses:

NewsCard

Displays latest Rockstar updates.

Future:

Automatic sorting

Pinned articles

Featured article

---

# Footer

Contains:

Brand

Explore links

Database links

Newsletter

Legal links

Future:

Social media

Discord

YouTube

Newsletter backend

---

# Cards

Every card follows the same philosophy.

Rounded

Premium

Hover lift

Soft glow

Large images

Minimal text

Cards currently include:

VehicleCard

CharacterCard

NewsCard

CategoryCard

SearchResultCard

Future cards should match this style.

---

# Buttons

Buttons should:

Lift slightly

Glow softly

Animate smoothly

Primary buttons:

Pink gradient

Secondary:

Glass

Outline

---

# Search UI

Premium spotlight design.

Large centered dialog.

Blurred overlay.

Future:

Keyboard navigation

Grouped results

Highlighted matches

Recent searches

Popular searches

---

# Images

Always use:

Next/Image

Proper object-fit

Lazy loading when possible

High quality assets

---

# Icons

Currently minimal.

Lucide React.

Emoji placeholders only where temporary.

Future:

Lucide everywhere

Custom GTA Companion icon set

---

# Responsive Philosophy

Desktop first.

Tablet second.

Mobile third.

Every page should remain beautiful on all devices.

No horizontal scrolling.

---

# Animation Philosophy

Subtle.

Professional.

Fast.

Never distracting.

Preferred:

Opacity

Scale

Translate

Blur

Avoid:

Large rotations

Bouncing

Overly flashy animations

---

# Homepage Target

The homepage should continue evolving until it visually reaches the quality of the reference image supplied by Gabrielius.

That image remains the design benchmark for all future homepage improvements.

Do not redesign the homepage in a different style.

Refine toward that visual target.

---

END OF PART 3

# PROJECT_HANDOFF.md

# PART 4 — DATABASE ARCHITECTURE, TYPES & SEARCH SYSTEM

---

# Overall Database Philosophy

The database is the heart of GTA Companion.

The goal is NOT to simply list GTA content.

Every database entry should eventually become a premium encyclopedia page.

Each item should eventually contain:

Hero image

Gallery

Statistics

Related content

Related guides

Related locations

Related vehicles

Related businesses

Official Rockstar references

Interactive map integration

Future AI summaries

The architecture must support this expansion.

---

# Current Databases

Implemented:

Vehicles

Characters

Locations

Businesses

Brands

Weapons

Animals

Activities

Guides

News

Manufacturers

Future databases:

Properties

Clothing

Radio Stations

Music

Collectibles

Missions

Random Events

Side Activities

Achievements

Trophies

Businesses Interior

Shops

Restaurants

Police

Gangs

Organizations

NPCs

Online Content

Future DLC

---

# Vehicle Architecture

Vehicles are the largest database.

Vehicles are separated into category files.

Current categories include:

Aircraft

Bikes

Boats

Commercial

Compact

Coupe

Muscle

OffRoad

Sedan

Sports

Super

SUV

Truck

Utility

Van

Each file exports:

Vehicle[]

Root file:

data/vehicles/index.ts

combines every category.

Never merge into one massive file.

---

# Vehicle Type

Current model:

id

slug

name

manufacturer

category

image

gallery

price

topSpeed

drivetrain

seats

description

firstAppearance

locations

variants

relatedGuides

Future additions:

Horsepower

Acceleration

Weight

Transmission

Fuel Type

Customization

Handling

Sound

Manufacturer Link

Related Vehicles

---

# Character Type

Current:

id

slug

name

image

role

status

description

firstAppearance

gallery

Future:

Relationships

Organizations

Locations

Vehicles

Biography

Quotes

Voice Actor

Story Progress

---

# Location Type

Current:

id

slug

name

region

type

image

description

firstAppearance

gallery

Future:

Map Coordinates

Businesses

Characters

Activities

Collectibles

Population

History

District

---

# Business Type

Current:

id

slug

name

category

location

image

description

firstAppearance

gallery

Future:

Owner

Services

Opening Hours

Related Missions

Products

Interior Images

---

# Brand Type

Current:

id

slug

name

category

image

description

firstAppearance

gallery

Future:

Products

Businesses

History

Related Companies

---

# Weapon Type

Current:

id

slug

name

category

image

description

firstAppearance

ammunition

gallery

Future:

Damage

Fire Rate

Magazine

Attachments

Range

Variants

Statistics

---

# Animal Type

Current:

id

slug

name

category

habitat

image

description

firstAppearance

gallery

Future:

Danger Level

Behavior

Locations

Diet

Size

Map Spawn

---

# Activity Type

Current:

id

slug

name

category

location

image

description

firstAppearance

gallery

Future:

Rewards

Difficulty

Players

Requirements

Map Locations

---

# Guide Type

Current:

id

title

slug

category

image

description

readingTime

difficulty

relatedVehicles

Future:

Related Activities

Related Businesses

Related Weapons

Related News

Author

Updated Date

---

# News Type

Current:

id

title

slug

category

image

description

publishedAt

author

readingTime

Future:

Tags

Related Articles

Related Guides

Featured Image

Official Source

---

# Search System

Sprint 2 introduced the new search architecture.

Search is centralized.

Every database maps into one array.

searchIndex

Search NEVER queries databases directly.

Advantages:

Single search algorithm

Consistent results

Easy filtering

Future fuzzy search

Future AI integration

---

# Current Search Sources

Connected:

Vehicles

Characters

Locations

Businesses

Brands

Weapons

Animals

Activities

Guides

News

---

# SearchItem Type

Current:

id

title

href

category

image

description

Categories:

Vehicle

Character

Location

Business

Manufacturer

Brand

Weapon

Animal

Activity

Guide

News

---

# Search Components

SearchBar

SearchDialog

SearchInput

SearchResults

SearchResultCard

useSearch

---

# Current Search Features

Ctrl + K support

Search dialog

Blurred overlay

Real search index

Category support

Navigation links

Premium UI

---

# Planned Search Improvements

Keyboard navigation

Arrow keys

Enter to open

Recent searches

Popular searches

Search history

Highlighted matches

Grouped results

Search images

Instant previews

Voice search

AI search

Filters

Category tabs

---

# Development Rule

Whenever a new database is created:

1.

Create the Type

2.

Create the Data

3.

Create the Page

4.

Create Detail Page

5.

Add to Search

Never skip step 5.

Every new content type must become searchable.

---

# Verification Rule

Before generating any search code:

Verify the corresponding interface.

Never assume field names.

This rule became mandatory after early TypeScript mismatches during development.

---

END OF PART 4

# PROJECT_HANDOFF.md

# PART 5 — COMPLETED FEATURES, DEVELOPMENT RULES & CURRENT PROJECT STATE

---

# Current Project Status

Project Status:

ACTIVE DEVELOPMENT

Framework:

Stable

Architecture:

Stable

Homepage:

Functional

Search:

Foundation completed

Authentication:

UI completed

Backend not yet implemented

---

# Completed Homepage

The homepage has been completely restructured.

It is now modular.

Current homepage sections:

Navbar

Hero

Quick Stats

Explore Categories

Featured Vehicles

Featured Characters

Latest News

Footer

Each section lives inside its own reusable component.

Never merge these together.

---

# Homepage Components

Current major homepage components:

Hero

BackgroundGlow

QuickStats

ExploreGrid

FeaturedVehicles

FeaturedCharacters

LatestNews

Footer

HomeContainer

Section

SectionHeader

CategoryCard

VehicleCard

CharacterCard

NewsCard

These are now the design standard for future components.

---

# Navigation

Completed:

Sticky navbar

Premium logo

Mega Menu

Search button

Authentication buttons

Blur background

Responsive spacing

Future additions:

User avatar

Notifications

Membership

Dashboard

---

# Hero

Completed:

Large Rockstar artwork

Premium typography

CTA buttons

Ambient glow

Gradient overlays

Image overlays

Responsive layout

Future:

Animated lighting

Parallax

Dynamic featured content

---

# Quick Stats

Completed:

Reusable cards

Hover effects

Statistics

Responsive grid

Future:

Live database counts

---

# Explore Grid

Completed:

Premium cards

Hover animations

Category routing

Large background images

Future:

Dynamic counts

Icons

---

# Featured Vehicles

Completed:

VehicleCard integration

Reusable layout

Future:

Featured algorithm

Editor's picks

Trending

---

# Featured Characters

Completed

Uses CharacterCard

Future:

Sorting

Popularity

Featured characters

---

# Latest News

Completed

NewsCard integration

Future:

Pinned news

Official Rockstar feed

Sorting

Pagination

---

# Footer

Completed:

Brand section

Explore links

Database links

Newsletter UI

Legal links

Ambient background

Future:

Newsletter backend

Discord

YouTube

Social links

---

# Login

Completed:

Premium UI

Dark theme

Responsive

Glass effects

Future:

NextAuth

OAuth

Google

Discord

Rockstar integration (if possible)

---

# Register

Completed

Matches login

Premium styling

Future backend

---

# Search

Major progress completed.

Current implementation:

SearchBar

SearchDialog

SearchInput

SearchResults

SearchResultCard

useSearch

Global searchIndex

Ctrl + K support

Overlay

Search UI

---

# Search Databases Connected

Vehicles

Characters

Locations

Businesses

Brands

Weapons

Animals

Activities

Guides

News

Every one of these currently feeds:

searchIndex

---

# Search Architecture

Search uses:

lib/search

Contains:

types.ts

index.ts

Future additions:

ranking.ts

fuzzy.ts

history.ts

recent.ts

popular.ts

---

# Data Architecture

Current databases:

Vehicles

Characters

Locations

Businesses

Brands

Weapons

Animals

Activities

Guides

News

Manufacturers

All are independent.

Never merge them.

---

# Cards Completed

VehicleCard

CharacterCard

NewsCard

CategoryCard

SearchResultCard

Every new card should follow the same design language.

---

# UI Style

Large radius

Glass effects

Pink glow

Premium hover

Dark gradients

Large typography

Wide spacing

Never regress toward generic styling.

---

# Coding Rules

Always send COMPLETE FILES.

Never send snippets.

Never say:

Replace line 52.

The user pastes entire files.

---

# Verification Rule

Always verify:

types

before generating components.

Never assume property names.

This rule is mandatory.

---

# Error Handling Rule

If compile errors exist:

STOP

Fix them first.

Do not continue building on top of errors.

---

# Development Workflow

Repeat:

Generate

Paste

Compile

Fix

Continue

Never skip compile verification.

---

# User Workflow Preference

The user works quickly.

The user does NOT want long conversations.

Preferred interaction:

Task

Complete file

Paste

Done

Next task

Keep responses concise.

---

# Current Sprint

Sprint 2

Focus:

Global Search

Authentication

Dashboard

Premium UX

---

# Immediate Next Goals

Finish Search

Keyboard navigation

ESC

Arrow keys

Enter

Grouping

Images

Descriptions

Recent searches

Search history

---

# After Search

Authentication backend

Favorites

Recently Viewed

Dashboard

Profile

---

# Later Sprints

Interactive Map

Progress Tracker

AI Companion

Premium Membership

Mobile App

---

# Long-Term Vision

GTA Companion should become the definitive companion platform for GTA VI.

Not a wiki.

Not a fan database.

A premium application with professional UX and scalable architecture.

Every decision going forward should support that goal.

---

# Instructions For The Next ChatGPT

You are not starting a new project.

You are continuing an existing production-quality application.

Respect the architecture.

Respect the design language.

Respect the coding rules.

Never simplify the project.

Never downgrade the UI.

Always verify types before generating code.

Always return COMPLETE FILES.

Keep responses short.

Stay work-focused.

Continue exactly where this handoff ends.

---

END OF PART 5

# PROJECT_HANDOFF.md

# PART 6 — COMPONENT LIBRARY & REUSABLE UI

---

# Component Philosophy

The project follows a component-first architecture.

Every component should have one responsibility.

Components should be reusable.

Never duplicate layouts.

Whenever a design repeats twice, create a reusable component.

---

# Shared Components

The following components are considered core UI.

They should remain reusable across the entire application.

---

# Navbar

Location

components/Navbar.tsx

Purpose

Global website navigation.

Current Features

- Sticky
- Blurred background
- GTA Companion logo
- Mega Menu
- Search trigger
- Sign In button
- Join Free button

Future Features

- Avatar
- Notifications
- Membership
- Dashboard
- Mobile Navigation

---

# Hero

Location

components/Hero.tsx

Purpose

Primary homepage hero.

Current Features

- Large Rockstar artwork
- Pink lighting
- Purple lighting
- Gradient overlays
- Large typography
- CTA buttons
- Responsive layout

This component represents the visual quality standard for the website.

---

# BackgroundGlow

Location

components/home/BackgroundGlow.tsx

Purpose

Global homepage ambient lighting.

Should always remain subtle.

Never overpower content.

---

# HomeContainer

Purpose

Keeps every homepage section aligned.

Maximum width

1700px

All homepage sections should use this container.

---

# Section

Purpose

Reusable wrapper.

Responsible only for spacing.

Never place business logic here.

---

# SectionHeader

Reusable section titles.

Current API

badge

title

description

Every homepage section should use it.

---

# SearchBar

Purpose

Navbar search trigger.

Current State

Premium UI.

Glass styling.

Ctrl + K indicator.

Future

Open search dialog.

---

# SearchDialog

Purpose

Global search overlay.

Current Features

Centered

Blurred overlay

Premium modal

Future

Keyboard navigation

Categories

History

Recent

AI Search

---

# SearchInput

Purpose

Search field.

Current Features

Auto focus

Search icon

Premium styling

Future

Voice search

Suggestions

Recent searches

---

# SearchResults

Purpose

Container for results.

Current

Displays search result cards.

Future

Grouped sections

Infinite results

Category filtering

---

# SearchResultCard

Purpose

Individual search result.

Current

Image

Category

Title

Description

Hover animation

Future

Keyboard highlight

Breadcrumb

Quick preview

---

# VehicleCard

Purpose

Display one vehicle.

Current

Image

Manufacturer

Category

Description

Seats

Hover animation

Future

Statistics

Favorite button

Compare button

Quick preview

---

# CharacterCard

Purpose

Display one character.

Current

Image

Role

Description

Hover effects

Future

Relationship info

Story progress

---

# NewsCard

Purpose

Display news articles.

Current

Image

Category

Date

Description

Future

Author

Pinned indicator

Official badge

---

# CategoryCard

Purpose

Homepage category navigation.

Current

Large image

Count

Description

Hover effects

Future

Live counts

Icons

Trending badge

---

# FeaturedVehicles

Homepage component.

Uses

VehicleCard

Purpose

Highlight important vehicles.

---

# FeaturedCharacters

Homepage component.

Uses

CharacterCard

---

# LatestNews

Homepage component.

Uses

NewsCard

---

# ExploreGrid

Homepage category browser.

Uses

CategoryCard

---

# QuickStats

Homepage statistics.

Current

Vehicle count

Manufacturer count

Official data

Future

Dynamic values.

---

# Footer

Purpose

Global footer.

Contains

Brand

Navigation

Newsletter

Legal

Future

Discord

Social media

Newsletter backend

---

# MegaMenu

Purpose

Database navigation.

Future

Images

Featured entries

Recently added

Popular databases

---

# NavLink

Purpose

Reusable navigation links.

All navbar links should use this component.

---

# Authentication Components

Current

Login Page

Register Page

Premium UI completed.

Backend not connected.

Future

NextAuth

OAuth

Remember Me

Forgot Password

Email Verification

---

# Home Sections

Current

HeroSection

QuickStatsSection

ExploreSection

FeaturedVehicleSection

FeaturedCharacterSection

LatestNewsSection

FooterSection

These are wrappers only.

Business logic stays in reusable components.

---

# Card Design Rules

Every card should include:

Rounded corners

Border

Background

Hover lift

Hover glow

Smooth transition

Readable spacing

Large typography

Never create flat cards.

---

# Component Rules

Every component should:

Have one responsibility

Be reusable

Remain strongly typed

Avoid duplicated logic

Avoid duplicated styling

---

# Naming Rules

PascalCase

Hero.tsx

VehicleCard.tsx

Footer.tsx

SearchDialog.tsx

Hooks

camelCase

useSearch.ts

Data

lowercase

vehicles.ts

brands.ts

news.ts

---

# Future Component Library

components/ui

Button

Badge

Input

Modal

Drawer

Dropdown

Tooltip

Avatar

Spinner

Tabs

CommandPalette

Pagination

Breadcrumbs

These should become the reusable UI foundation for the project.

---

# Reusability Rule

If the same UI appears more than twice:

Extract it.

Never duplicate component code.

---

END OF PART 6

# PROJECT_HANDOFF.md

# PART 7 — ROUTING, PAGES, DEVELOPMENT ROADMAP & NEXT ENGINEER INSTRUCTIONS

---

# Routing Philosophy

The project uses:

Next.js 16

App Router

Every database follows identical routing.

Consistency is mandatory.

Never invent different routing structures.

---

# Current Routes

Home

/

Authentication

/login

/register

/profile

Databases

/vehicles

/vehicles/[slug]

/characters

/characters/[slug]

/locations

/locations/[slug]

/businesses

/businesses/[slug]

/brands

/brands/[slug]

/weapons

/weapons/[slug]

/animals

/animals/[slug]

/activities

/activities/[slug]

/guides

/guides/[slug]

/news

/news/[slug]

Map

/map

Future

/dashboard

/settings

/account

/favorites

/recent

/progress

/search

---

# Dynamic Pages

Every database follows identical architecture.

Listing page

↓

Detail page

Never break this pattern.

Every detail page should eventually contain:

Hero

Gallery

Information

Statistics

Related Content

Related Guides

Related Database Entries

Future AI Summary

---

# Current Homepage Status

Homepage is now modular.

Sections:

Navbar

Hero

Quick Stats

Explore

Featured Vehicles

Featured Characters

Latest News

Footer

The homepage is considered the visual benchmark for the entire project.

Future pages should match this quality.

---

# Search Status

Completed

Search Overlay

Search Dialog

Search Input

Search Result Cards

Search Results

Ctrl + K support

Shared Search Index

Connected Databases

Vehicles

Characters

Locations

Businesses

Brands

Weapons

Animals

Activities

Guides

News

---

# Search Still To Build

Arrow key navigation

Enter to open

ESC improvements

Search history

Recent searches

Popular searches

Category grouping

Highlighted matching text

Image placeholders

Loading state

Empty state improvements

Fuzzy search

Search ranking

---

# Authentication Status

Current

Beautiful UI

Responsive

Premium styling

Backend

Not implemented.

Future

NextAuth

Google Login

Discord Login

Remember Me

Forgot Password

Email Verification

User Sessions

Protected Routes

---

# Dashboard

Not started.

Future dashboard should include:

Profile

Favorites

Recently Viewed

Saved Progress

Bookmarks

Notifications

Premium Membership

Statistics

---

# Favorites

Not started.

Future

Save vehicles

Save guides

Save businesses

Save locations

Save news

Save activities

Cross-device sync

---

# Recently Viewed

Not started.

Future

Automatically track viewed pages.

Show inside dashboard.

---

# Interactive Map

Not started.

This is one of the flagship features.

Must become one of the strongest parts of GTA Companion.

Future map should support:

Locations

Businesses

Activities

Collectibles

Vehicles

Animals

Filters

Progress tracking

User pins

Custom routes

---

# AI Companion

Future feature.

Users should eventually be able to ask:

Where do I find...

What's the fastest...

Which vehicle...

Best weapon...

Explain...

Compare...

This should use the internal database.

Not generic AI responses.

---

# Premium Membership

Future.

Possible benefits:

No ads

Exclusive guides

Interactive tools

Progress sync

Advanced search

Early access

Map tools

Downloads

---

# Mobile App

Long-term goal.

Website architecture should already support it.

Do not hardcode web-only assumptions.

---

# Performance Goals

Every page should:

Load quickly

Use Next/Image

Avoid unnecessary client components

Lazy load where appropriate

Avoid unnecessary re-renders

Keep bundles small

---

# SEO Goals

Every page should eventually include:

Title

Description

Open Graph

Twitter

Schema.org

Canonical URL

Breadcrumbs

Structured Data

---

# Accessibility Goals

Keyboard friendly

Readable contrast

Semantic HTML

Focus states

ARIA labels where appropriate

---

# Coding Rules (MANDATORY)

Always generate COMPLETE FILES.

Never generate partial edits.

Never ask the user to manually merge code.

The user copies entire files.

---

# Type Safety Rule

Always verify interfaces first.

Never assume property names.

Never invent missing fields.

If unsure:

Ask for the type file.

---

# Communication Style

Minimal.

Work focused.

No unnecessary discussion.

One task.

Complete file.

Compile.

Next task.

---

# Current Priority

Continue Sprint 2.

Finish premium search experience.

After search:

Authentication backend

Dashboard

Favorites

Recently Viewed

Interactive Map

---

# Homepage Design Target

IMPORTANT

The homepage is NOT finished.

The visual target remains the homepage reference image supplied by Gabrielius.

Whenever improving the homepage:

Do NOT redesign it.

Do NOT simplify it.

Refine it toward the supplied reference.

Maintain:

Dark premium feel

Pink ambient lighting

Large cinematic imagery

Luxury spacing

High-end typography

Smooth animations

Premium cards

---

# What Must Never Change

The project philosophy.

Premium-first mindset.

Reusable architecture.

Complete-file workflow.

Type verification.

Minimal conversation.

Scalable code.

Professional UI quality.

---

# Instructions For The Next ChatGPT

You are continuing an active production project.

Do not restart.

Do not simplify.

Do not replace architecture.

Respect all previous decisions.

Respect the user's workflow.

Always provide complete files.

Always verify types before generating code.

Keep responses concise.

Focus on building GTA Companion into the highest-quality GTA companion platform possible.

---

END OF PART 7

# PROJECT_HANDOFF.md

# PART 8 — WORKFLOW, ENGINEERING RULES & PROJECT MEMORY

---

# This Project Is Different

This is NOT a prototype.

This is NOT a tutorial.

This is NOT an experiment.

Every file should be written as if it will remain in production for years.

Never build "temporary" solutions.

Build the final architecture from the beginning.

---

# Relationship

Founder

Gabrielius Reventas

Lead Engineer

ChatGPT

The AI is expected to act like a technical co-founder.

Not merely an assistant.

Every architectural decision should be made with the project's long-term success in mind.

---

# Development Workflow

Every development cycle follows exactly this process.

Step 1

User sends current file.

↓

Step 2

AI verifies types and dependencies.

↓

Step 3

AI generates COMPLETE replacement file.

↓

Step 4

User pastes file.

↓

Step 5

User compiles project.

↓

Step 6

If errors exist:

Fix immediately.

↓

Step 7

Continue.

Never skip compile verification.

---

# Absolute Rule

Never send snippets.

Never send:

Replace line...

Insert this...

Delete this...

The user works by replacing complete files.

Always send complete files.

---

# Type Verification Rule

Before writing ANY component that consumes data:

Check the corresponding type.

Examples

Vehicle

Character

Guide

News

Business

Animal

Location

Brand

Weapon

Activity

Never assume property names.

This became mandatory after early TypeScript issues.

---

# Architecture Rule

Always improve existing architecture.

Never replace architecture without good reason.

The project already has a solid foundation.

Future work should build on it.

---

# UI Philosophy

Every page should feel:

Premium

Luxury

Fast

Modern

Cinematic

Everything should have intention.

Nothing should look generic.

---

# Animation Rules

Preferred

Opacity

Scale

Translate

Blur

Glow

Avoid

Bounce

Large rotations

Cheap effects

Long animations

Everything should remain elegant.

---

# Performance Rules

Always consider:

Bundle size

Rendering performance

Server Components

Client Components

Next/Image

Lazy loading

Reusable logic

Never sacrifice performance for unnecessary visuals.

---

# File Organization

Keep folders clean.

Never create random utility folders.

Every feature should have a logical home.

If something grows large:

Split it.

Never create giant files.

---

# Reusability Rule

Whenever code repeats:

Extract it.

Whenever layout repeats:

Create component.

Whenever logic repeats:

Create utility.

---

# Search Rule

Every future database must automatically become searchable.

Checklist

Create type

↓

Create data

↓

Create page

↓

Create detail page

↓

Add to searchIndex

↓

Test search

Only then is the feature complete.

---

# Homepage Rule

The homepage is the face of GTA Companion.

Every homepage improvement should move toward the supplied reference image.

Do not redesign.

Do not simplify.

Refine.

Improve.

Polish.

---

# Design Consistency

Every new page should visually belong to the same product.

Examples

Cards

Buttons

Typography

Spacing

Lighting

Shadows

Hover states

should all match the homepage.

---

# Future Components

Eventually build a reusable UI system.

Examples

Button

Badge

Input

Card

Avatar

Dialog

Drawer

Tooltip

Tabs

Pagination

Dropdown

Toast

Modal

Command Palette

Everything should share one design language.

---

# Future Search Improvements

Keyboard navigation

Arrow keys

Enter

ESC

Grouped categories

Image previews

Highlighted matches

Recent searches

Search history

Pinned results

Trending searches

Fuzzy search

Ranking

AI search

---

# Future Dashboard

Profile

Favorites

Bookmarks

Recently Viewed

Statistics

Membership

Saved Progress

Notifications

Continue Playing

---

# Future Map

Interactive

Beautiful

Fast

Filterable

Trackable

Should eventually become one of the strongest features of the project.

---

# Future AI Companion

The AI should answer questions using GTA Companion's own database.

Not generic internet knowledge.

Examples

Compare vehicles.

Recommend weapons.

Explain businesses.

Locate animals.

Suggest guides.

Connect related content.

---

# Quality Standard

Whenever generating code ask:

"Would Rockstar be proud of this page?"

If the answer is no—

Improve it.

---

# User Preferences

The user prefers:

Minimal conversation.

Fast iterations.

Complete files.

Professional architecture.

No unnecessary explanations.

Focus on work.

Respect these preferences throughout the project.

---

# Long-Term Goal

Create the highest quality GTA companion platform available.

Not simply feature-rich.

Beautiful.

Fast.

Scalable.

Professional.

Future-proof.

---

# Transition Rule

When moving to a new chat:

This PROJECT_HANDOFF.md becomes the source of truth.

The next ChatGPT should continue development exactly from this document.

No re-planning.

No restarting.

Continue building.

---

END OF PART 8

# PROJECT_HANDOFF.md

# PART 9 — ROADMAP, DEVELOPMENT ORDER & NON-NEGOTIABLE RULES

---

# Development Philosophy

The project should always be developed in logical layers.

Never jump randomly between features.

Every completed feature becomes the foundation for the next one.

Quality is more important than speed.

---

# Completed Milestones

## Foundation

✅ Next.js project

✅ TypeScript

✅ Tailwind

✅ App Router

✅ GitHub repository

✅ Project architecture

---

## Homepage

✅ Premium Hero

✅ Navbar

✅ Footer

✅ Background glow

✅ Explore section

✅ Featured Vehicles

✅ Featured Characters

✅ Latest News

✅ Quick Stats

Responsive homepage foundation complete.

---

## Authentication UI

✅ Login page

✅ Register page

UI only.

Backend still to come.

---

## Search

✅ Search overlay

✅ Ctrl + K

✅ Search dialog

✅ Search input

✅ Search results

✅ Search cards

✅ Shared search index

Connected databases:

Vehicles

Characters

Locations

Businesses

Brands

Weapons

Animals

Activities

Guides

News

---

# Current Sprint

Sprint 2

Search Experience

Search foundation is complete.

Now improve it.

---

# Immediate Next Tasks

Priority 1

Finish Search UX

Add:

Keyboard navigation

Arrow keys

Enter

ESC improvements

Highlighted matches

Recent searches

Popular searches

Grouped categories

Loading states

Empty states

Search animations

---

Priority 2

Authentication Backend

NextAuth

Sessions

Protected routes

Remember me

Forgot password

OAuth

Google

Discord

---

Priority 3

Dashboard

User profile

Favorites

Bookmarks

Recently viewed

Statistics

Notifications

Membership

Saved progress

---

Priority 4

Favorites System

Every database item should eventually support:

Favorite

Unfavorite

Sync between devices

Dashboard integration

---

Priority 5

Recently Viewed

Automatically track:

Vehicles

Characters

Businesses

Locations

Guides

News

Display in dashboard.

---

Priority 6

Database Improvements

Every detail page should eventually contain:

Gallery

Statistics

Related content

Related guides

Related locations

Related businesses

Breadcrumbs

Share button

Favorite button

---

Priority 7

Interactive Map

This is one of the biggest future features.

Requirements:

Fast

Beautiful

Interactive

Responsive

Filterable

Map categories:

Locations

Businesses

Activities

Animals

Vehicles

Collectibles

User Pins

Progress

Routes

---

Priority 8

AI Companion

Future AI should use ONLY GTA Companion data whenever possible.

Examples

Recommend vehicles.

Explain businesses.

Suggest guides.

Find locations.

Compare items.

Connect related information.

This should feel like a GTA expert.

---

Priority 9

Premium Membership

Potential features

Exclusive guides

No ads

Progress sync

Map tools

Downloads

Profile customization

Early access

---

Priority 10

Mobile App

Website architecture should already support future mobile development.

Avoid decisions that make mobile difficult later.

---

# Database Expansion

Current databases

Vehicles

Characters

Locations

Businesses

Brands

Weapons

Animals

Activities

Guides

News

Future databases

Properties

Collectibles

Radio Stations

Music

Police

Gangs

Organizations

Stores

Restaurants

Jobs

Missions

Side Missions

Achievements

Trophies

Businesses Interior

Vehicles Customization

Clothing

Hair Styles

Tattoos

Phone Apps

Stocks

Economy

Events

DLC

Online Content

---

# UI Expansion

Future reusable components

Button

Card

Badge

Avatar

Input

Textarea

Dropdown

Dialog

Drawer

Toast

Tooltip

Accordion

Tabs

Carousel

Table

Breadcrumbs

Pagination

Context Menu

Command Palette

Everything should match the homepage style.

---

# Performance Checklist

Before merging new features

Ask:

Is this reusable?

Is this typed?

Can this become server-side?

Can this be split?

Can performance improve?

Avoid unnecessary client components.

---

# Before Every Feature

Checklist

Type

↓

Data

↓

Page

↓

Component

↓

Search

↓

Responsive

↓

Compile

↓

Continue

Never skip these steps.

---

# Git Workflow

Recommended after every completed feature

git add .

git commit

git push

Never allow large amounts of uncommitted work.

---

# Documentation Rule

Whenever a major feature is completed

Update:

Architecture

Roadmap

Completed Features

Future Tasks

Keep documentation synchronized with the codebase.

---

# Non-Negotiable Rules

Always send COMPLETE FILES.

Never send partial edits.

Never guess interfaces.

Always verify types.

Always keep architecture clean.

Never duplicate logic.

Never simplify the UI.

Never lower the quality standard.

Never continue while compile errors exist.

Keep responses concise.

Stay work-focused.

---

# Success Metric

If someone opens GTA Companion for the first time they should think:

"This looks like an official Rockstar product."

That is the standard every future feature should meet.

---

END OF PART 9

# PROJECT_HANDOFF.md

# PART 10 — FINAL LEAD ENGINEER NOTES & CONTINUATION INSTRUCTIONS

---

# Read This First

You are NOT starting a new project.

You are continuing an existing production-quality application.

Assume every architectural decision in Parts 1–9 has already been implemented or intentionally planned.

Do NOT redesign the project.

Do NOT simplify the project.

Continue building it.

---

# Current Status

Framework

Stable

Architecture

Stable

Homepage

Stable foundation

Authentication UI

Completed

Search

Foundation completed

Search Index

Connected

Major databases

Connected

Project organization

Stable

The project is now entering feature expansion.

---

# Current Visual Goal

The homepage is NOT considered final.

Gabrielius has supplied a homepage reference image.

That image is the visual benchmark.

Future homepage work should always move closer to that design.

Never redesign in another style.

Refine toward the supplied reference.

---

# Current Development Priority

Continue Sprint 2.

Search Experience

Finish

Keyboard navigation

Search ranking

Grouped results

History

Recent searches

Highlighted matches

Perfect UX

---

# Development Style

The founder prefers:

Very little conversation.

Mostly code.

Complete files.

Fast iterations.

Professional architecture.

Always work focused.

Do not waste responses.

---

# Communication Style

Good:

"Replace this file."

"Done."

"Next file."

Bad:

Long explanations.

Repeated summaries.

Large discussions.

The founder wants momentum.

---

# Working Rule

Before writing code:

Verify interfaces.

Verify dependencies.

Generate complete file.

Compile.

Continue.

Never guess.

---

# Complete File Rule

Never generate snippets.

Never generate patches.

Never tell the founder to manually merge code.

Always provide an entire replacement file.

This is mandatory.

---

# Compile Rule

If compile errors appear

Stop.

Fix them.

Only continue after the project compiles again.

Never stack new features on top of existing errors.

---

# Design Rule

Everything should feel like one product.

If a new page looks different from the homepage

Improve it.

Never allow inconsistent UI.

---

# Component Rule

Whenever a component becomes reusable

Extract it.

Do not duplicate code.

---

# Search Rule

Every future database automatically becomes searchable.

If a new content type is created

It is not finished until

searchIndex

contains it.

---

# Data Rule

Strong typing.

No "any".

No guessing.

Every data file has a matching interface.

---

# Architecture Rule

Think years ahead.

Not weeks.

Everything should scale.

---

# User Expectations

Gabrielius is building this as a real business.

Not a hobby.

Treat every decision seriously.

Prioritize:

Maintainability

Scalability

Performance

Professional UX

---

# AI Role

The AI is expected to behave like:

Lead Engineer

Software Architect

Senior Frontend Engineer

Senior TypeScript Engineer

UX Designer

Technical Writer

Product Advisor

The AI should proactively identify better architecture when appropriate, while respecting existing project decisions.

---

# Future Quality Standard

Every feature should answer:

Would this impress a Rockstar developer?

Would this impress a senior frontend engineer?

Would this feel premium to a first-time visitor?

If not

Improve it.

---

# Coding Priorities

1.

Correctness

2.

Architecture

3.

Performance

4.

Readability

5.

Visual polish

6.

Developer experience

---

# Git Recommendations

Commit after meaningful milestones.

Suggested commit style:

feat:

fix:

refactor:

style:

docs:

Example

feat: add global search index

fix: resolve SearchDialog imports

refactor: extract reusable Section component

---

# Documentation

Whenever a significant feature is finished

Update documentation.

Keep the project handoff current.

Do not let documentation become outdated.

---

# If Information Is Missing

Do NOT invent it.

Ask for:

Type

Component

Data file

Then continue.

---

# Final Instruction

Continue this project exactly as if you had participated in every previous conversation.

Respect all architecture.

Respect all design decisions.

Respect the founder's workflow.

Respect the premium quality standard.

Continue building GTA Companion into the definitive companion platform for Grand Theft Auto VI.

---

# END OF PROJECT_HANDOFF.md

This concludes the official GTA Companion Project Handoff.

The next chat should receive:

1. PROJECT_HANDOFF.md Parts 1–10
2. The homepage reference image
3. The instruction:

"You are the Lead Engineer for GTA Companion. Read the handoff completely, use it as the source of truth, and continue development exactly where it ended."

After that, development should continue seamlessly with no loss of context.

END OF PART 10