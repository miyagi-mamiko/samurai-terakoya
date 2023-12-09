<?php
/*
Template Name: 卒業生の声投稿ページ
Template Post Type: post
*/
?>
<?php get_header(); ?>
 
 <?php if(have_posts()) :?>
   <?php while (have_posts()) : the_post() ; ?>
    <!-- Home -->

    <div class="home">
      <div class="breadcrumbs_container">
        <div class="image_header">
          <div class="header_info">
          <?php
             $cat = get_the_category();
             $catslug = $cat[0]->slug;
             $catname = $cat[0]->cat_name;
           ?>
             <div><?php echo $catslug; ?></div>
             <div><?php echo $catname; ?></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Post 部分 -->
    <div class="course">
      <div class="row content-body">
        <!-- Course -->
        <div class="col-lg-8">
          <!-- Course Tabs -->
          <div class="course_tabs_container">
            <div class="tab_panels">
              <!-- Description -->
              <div class="tab_panel">
              <div class="tab_panel_title"><?php echo $catname; ?></div>
                <div class="tab_panel_content">
                  <div class="tab_panel_text">
                    <div class="news_posts_small">
                      <div class="row">
                        
                        <div class="col-lg-12 col-md-12 col-sx-12">
                          <div class="news_post_small_header">
                          <img src="<?php echo get_template_directory_uri( );?>/images/tags-solid.png" alt="" /> <?php echo $catname; ?>
                          </div>
                          <div class="news_detail_title">
                          <?php the_title(); ?>
                          </div>
                          <div class="news_time">
                            <div>
    
                               <span>卒業年：<?php echo post_custom('graduate_year'); ?> </span>
                            </div>
                            
                          </div>
                          <div class="news_post_meta">
                          <?php the_content(); ?>
                          </div>

                          <hr />
                          <div class="social_share">
                          <img src="<?php echo get_template_directory_uri(); ?>/images/facebook-square-brands.png" alt=""/>
                             <img src="<?php echo get_template_directory_uri(); ?>/images/twitter-square-brands.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <?php endwhile; ?>
     <?php endif; ?>

        <!--  Sidebar -->
        <div class="col-lg-4" style="background-color: #2b7b8e33">
        <?php get_sidebar(); ?>
        </div>
      </div>
    </div>
    <?php get_footer(); ?>