from django.contrib import admin
from django.shortcuts import resolve_url
from django.contrib.admin.templatetags.admin_urls import admin_urlname
from django.utils.html import format_html

from blog.models import Profile, Post, Tag, Image

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    model = Profile

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    model = Tag

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    model = Image

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    model = Post
    def title_link(self, item):

        url = resolve_url(admin_urlname(Post._meta, 'change'), item.id)
        return format_html(
            '<a href="{url}">{name}</a>'.format(url=url, name=str(item.title))
        )

    list_display = (
        "id",
        "title_link",
        "subtitle",
        # "slug",
        "publish_date",
        "published",
    )
    list_filter = (
        "published",
        "publish_date",
    )
    # list_editable = (
    #     "title",
    #     "subtitle",
    #     "slug",
    #     "publish_date",
    #     "published",
    # )
    search_fields = (
        "title",
        "subtitle",
        "slug",
        "body",
    )
    prepopulated_fields = {
        "slug": (
            "title",
            "subtitle",
        )
    }
    date_hierarchy = "publish_date"
    save_on_top = True



